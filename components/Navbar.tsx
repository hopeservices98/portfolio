import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Compétences', href: '#competences' },
  { name: 'Projets', href: '#projets' },
  { name: 'Expériences', href: '#experiences' },
  { name: 'Formations', href: '#formations' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      // Itérer à partir de la dernière section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = (section as HTMLElement).offsetTop;
        // Si la position de défilement a dépassé le haut de la section (avec une marge), c'est la section active
        if (window.scrollY >= sectionTop - 150) {
          currentSection = section.id;
          break; // Sortir de la boucle une fois la section active trouvée
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-slate-900/50 border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto max-w-5xl px-6 flex justify-center items-center h-20">
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-teal-400'
                    : 'text-slate-400 hover:text-teal-400'
                }`}
              >
                <span className="uppercase tracking-widest">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};