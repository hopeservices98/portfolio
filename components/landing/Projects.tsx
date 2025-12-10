import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../../types/landing';
import { projects as portfolioProjects } from '../../constants';

// Update projects to point to the main portfolio
const projects: Project[] = portfolioProjects.slice(0, 3).map((p, index) => ({
  id: index + 1,
  title: p.title,
  description: p.description,
  tags: p.technologies.slice(0, 3),
  image: `https://picsum.photos/600/400?random=${10 + index}`,
  link: p.link
}));

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 400, damping: 30 });

  // Tilt effect configuration
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  // Highlight gloss movement
  const glossX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glossY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      className="perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        <div className="rounded-xl overflow-hidden h-full flex flex-col border border-gray-800 hover:border-teal-500/50 transition-colors duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)] bg-slate-900/40 backdrop-blur-md">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden transform-style-3d">
            <div className="absolute inset-0 bg-teal-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
            <motion.img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-grow flex flex-col relative z-20 transform-style-3d translate-z-10">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-1 rounded border border-teal-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-teal-400 transition-colors w-full justify-between group/link">
                <span>VOIR LE PROJET</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Subtle gradient overlay for depth */}
           <motion.div 
              style={{ 
                background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 80%)",
                x: glossX,
                y: glossY
              }}
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 mix-blend-overlay"
           />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-teal-400 font-mono text-xl">03 //</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">APERÇU DES PROJETS</h2>
          <div className="h-[1px] flex-grow bg-gray-800"></div>
        </div>

        <p className="text-gray-400 mb-12 text-lg max-w-2xl">
          Voici un aperçu de mes réalisations récentes. Pour voir tous les détails et le code source, visitez le portfolio complet.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;