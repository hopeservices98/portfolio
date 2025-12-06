
import React from 'react';
import { useIsMobile } from './hooks/useIsMobile';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { SkillBadge } from './components/SkillBadge';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { projects, experiences, formations, skills } from './constants';

const App: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen font-sans bg-slate-900 selection:bg-teal-500/30">
      {!isMobile && <CustomCursor />}
      <Navbar />
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-24 flex flex-col gap-20 md:gap-32">
        <div className="flex flex-col gap-10 md:gap-16">
          <Header />
          <SocialLinks />
        </div>

        <Section title="Compétences" id="competences">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </Section>

        <Section title="Projets" id="projets">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Expériences Professionnelles" id="experiences">
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} item={exp} index={index} />
            ))}
          </div>
        </Section>

        <Section title="Formations" id="formations">
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            {formations.map((formation, index) => (
              <ExperienceCard key={index} item={formation} index={index} />
            ))}
          </div>
        </Section>
        
        <Footer />
      </main>
    </div>
  );
};

export default App;
