
import React, { useState, useEffect } from 'react';
import { useIsMobile } from './hooks/useIsMobile';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Section as PortfolioSection } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { FormationCard } from './components/FormationCard';
import { SkillBadge } from './components/SkillBadge';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import { projects, experiences, formations, skills } from './constants';

// Landing Page Imports
import ParticleBackground from './components/landing/ParticleBackground';
import LandingCarousel from './components/landing/LandingCarousel';
import HeroSlide from './components/landing/HeroSlide';
import AboutSlide from './components/landing/AboutSlide';
import ProjectsSlide from './components/landing/ProjectsSlide';
import ChatbotSlide from './components/landing/ChatbotSlide';
import ContactSlide from './components/landing/ContactSlide';
import AiAssistant from './components/landing/AiAssistant';
import { Section as LandingSection } from './types/landing';

const App: React.FC = () => {
  const isMobile = useIsMobile();
  const [showPortfolio, setShowPortfolio] = useState(() => window.location.hash === '#portfolio');

  useEffect(() => {
    const handleHashChange = () => {
      setShowPortfolio(window.location.hash === '#portfolio');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToLandingSection = (section: LandingSection | string) => {
    if (section === 'main-portfolio') {
      setShowPortfolio(true);
      // Change the URL hash without triggering a full reload
      window.history.pushState(null, '', '#portfolio');
      setTimeout(() => {
        const portfolioElement = document.getElementById('main-portfolio');
        if (portfolioElement) {
          portfolioElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const landingSlides = [
    {
      component: <HeroSlide scrollToSection={scrollToLandingSection} />,
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.3), rgba(255, 255, 255, 0))',
    },
    {
      component: <AboutSlide />,
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 212, 191, 0.3), rgba(255, 255, 255, 0))',
    },
    {
      component: <ProjectsSlide scrollToSection={scrollToLandingSection} />,
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(129, 140, 248, 0.3), rgba(255, 255, 255, 0))',
    },
    {
      component: <ChatbotSlide />,
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56, 189, 248, 0.3), rgba(255, 255, 255, 0))',
    },
    {
      component: <ContactSlide scrollToSection={scrollToLandingSection} />,
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 212, 191, 0.2), rgba(255, 255, 255, 0))',
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-900 selection:bg-teal-500/30 text-gray-200">
      {!isMobile && <CustomCursor />}
      
      {!showPortfolio && (
        <>
          {/* <ParticleBackground /> */}
          <LandingCarousel slides={landingSlides} scrollToSection={scrollToLandingSection} />
          <AiAssistant />
        </>
      )}

      {showPortfolio && (
        <div id="main-portfolio" className="animate-fade-in-up">
          <Navbar />
          <main className="container mx-auto max-w-5xl px-6 py-12 md:py-24 flex flex-col gap-20 md:gap-32">
            <div className="flex flex-col gap-10 md:gap-16">
              <Header />
              <SocialLinks />
            </div>

            <PortfolioSection title="Compétences" id="competences">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </PortfolioSection>

            <PortfolioSection title="Projets" id="projets">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </PortfolioSection>

            <PortfolioSection title="Expériences Professionnelles" id="experiences">
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} item={exp} index={index} />
                ))}
              </div>
            </PortfolioSection>

            <PortfolioSection title="Formations" id="formations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formations.map((formation, index) => (
                  <FormationCard key={index} formation={formation} index={index} />
                ))}
              </div>
            </PortfolioSection>
            
            <Footer />
          </main>
        </div>
      )}
    </div>
  );
};

export default App;
