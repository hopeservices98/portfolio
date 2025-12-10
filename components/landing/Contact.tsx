import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-teal-500/5 to-transparent blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-teal-400 font-mono mb-4 block">04 // CONTACT</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à collaborer ?</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Visitez mon portfolio complet pour voir mes disponibilités et coordonnées détaillées, ou écrivez-moi simplement ici.
        </p>

        <a
          href="mailto:rak.angelo98@gmail.com"
          className="inline-block px-8 py-4 border border-teal-400 text-teal-400 font-bold rounded hover:bg-teal-400 hover:text-slate-900 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_40px_rgba(45,212,191,0.4)]"
        >
          ENVOYER UN EMAIL
        </a>

        {/* Le lien vers le portfolio principal n'est plus nécessaire ici car nous sommes DANS le portfolio */}
        
        <div className="mt-20 flex justify-center gap-8">
          <a href="https://github.com/angelorak98" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/angelo-rakotonirina-5240b518a/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          {/* <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Twitter className="w-6 h-6" />
          </a> */}
          <a href="mailto:rak.angelo98@gmail.com" className="text-gray-400 hover:text-teal-400 transition-colors hover:-translate-y-1 transform duration-200">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-12 text-sm text-gray-600 font-mono">
          <p>CONÇU & DÉVELOPPÉ PAR ANGELO</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;