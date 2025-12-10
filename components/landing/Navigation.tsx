import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Section } from '../../types/landing';

interface NavigationProps {
  activeSection: Section | string;
  scrollToSection: (section: Section | string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: Section.HOME, label: '01 // HOME' },
    { id: Section.ABOUT, label: '02 // ABOUT' },
    { id: Section.PROJECTS, label: '03 // WORKS' },
    { id: Section.CONTACT, label: '04 // CONTACT' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection(Section.HOME)}
        >
          <div className="p-2 border border-teal-500/30 rounded group-hover:border-teal-500 transition-colors">
             <Terminal className="text-teal-400 w-6 h-6" />
          </div>
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            ANGELO<span className="text-teal-400">.DEV</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-mono text-sm tracking-widest transition-all duration-300 hover:text-teal-400 relative group ${
                activeSection === item.id ? 'text-teal-400' : 'text-gray-400'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-2 left-0 h-[1px] bg-teal-400 transition-all duration-300 ${
                activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-t border-gray-800 p-6 md:hidden flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              className={`text-left font-mono text-lg ${
                 activeSection === item.id ? 'text-teal-400' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;