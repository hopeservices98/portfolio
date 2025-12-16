import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects as portfolioProjects } from '../../constants';
import { Section } from '../../types/landing';

interface ProjectsSlideProps {
  scrollToSection: (section: Section | string) => void;
}

const ProjectsSlide: React.FC<ProjectsSlideProps> = ({ scrollToSection }) => {
  // Select a couple of projects to highlight
  const featuredProjects = portfolioProjects.slice(0, 2); 

  return (
    <section id="projects-slide" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Mes <span className="text-teal-400">Réalisations</span>
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12">
            Un aperçu de mes projets les plus marquants. Chaque projet est une preuve concrète de mes compétences.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-lg p-6 shadow-lg flex flex-col items-center text-center"
              >
                <img src={`https://picsum.photos/400/250?random=${index}`} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors font-medium text-sm"
                >
                  Voir le projet <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('main-portfolio')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-slate-900 font-bold rounded-lg shadow-[0_0_20px_rgba(45,212,191,0.3)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] transition-all"
          >
            VOIR TOUS LES PROJETS
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
      {/* Background ambience is now handled by the LandingCarousel */}
    </section>
  );
};

export default ProjectsSlide;