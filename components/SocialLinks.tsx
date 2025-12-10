import React, { useState } from 'react';
import { Puzzle3D } from './Puzzle3D';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const LinkedInIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const EmailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

interface SocialCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
  detail: string;
  copyValue?: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ href, icon, label, color, detail, copyValue }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (copyValue) {
      e.preventDefault();
      navigator.clipboard.writeText(copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getColorClasses = (colorName: string) => {
    const colors: {[key: string]: string} = {
      blue: 'border-blue-500/30 text-blue-400 group-hover:shadow-blue-500/20 bg-blue-500/10',
      gray: 'border-gray-500/30 text-gray-400 group-hover:shadow-gray-500/20 bg-gray-500/10',
      teal: 'border-teal-500/30 text-teal-400 group-hover:shadow-teal-500/20 bg-teal-500/10',
      green: 'border-green-500/30 text-green-400 group-hover:shadow-green-500/20 bg-green-500/10',
      red: 'border-red-500/30 text-red-400 group-hover:shadow-red-500/20 bg-red-500/10',
    };
    return colors[colorName] || colors.gray;
  };

  const colorClass = getColorClasses(color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group h-24 w-full [perspective:1000px]"
    >
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Face avant */}
        <div className={`absolute inset-0 h-full w-full flex items-center gap-4 p-4 rounded-xl border bg-slate-900/60 backdrop-blur-md shadow-lg transition-all duration-300 ${colorClass}`}>
          <div className={`p-3 rounded-lg bg-slate-800/80 shadow-inner`}>
            {React.cloneElement(icon as React.ReactElement, { width: 28, height: 28 })}
          </div>
          <span className="font-bold text-lg tracking-wide text-slate-200">{label}</span>
        </div>

        {/* Face arrière */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={copyValue ? handleCopy : undefined}
          className={`absolute inset-0 h-full w-full flex items-center justify-center p-4 rounded-xl border bg-slate-900/90 backdrop-blur-xl [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl hover:bg-slate-800 transition-colors cursor-pointer ${colorClass.split(' ')[0]}`}
        >
          <span className={`text-sm font-bold text-center ${colorClass.split(' ')[1]}`}>
            {copied ? "Copié !" : detail}
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export const SocialLinks: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const isMobile = useIsMobile();
  const address = "Lot 22 D Ter Imerinafovoany, Antananarivo, Madagascar";
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="flex flex-col items-center md:items-start gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      {!isUnlocked ? (
        <div className="w-full flex flex-col items-center md:items-start gap-4 p-6 bg-slate-800/30 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-slate-200">Déverrouiller les coordonnées</h3>
          <p className="text-slate-400 text-sm">
            Trouvez le logo de mon langage préféré et cliquez dessus pour déverrouiller. Lisez bien mon portfolio pour trouver la réponse.
          </p>
          {isMobile ? (
            <div className="flex flex-col items-center gap-4">
              <img src="/profil.png" alt="Angelo Rakotonirina" className="w-24 h-24 rounded-full border-2 border-slate-600 object-cover" />
              <button
                onClick={() => setIsUnlocked(true)}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-full font-semibold transition-colors text-sm"
              >
                Déverrouiller les coordonnées
              </button>
            </div>
          ) : (
            <Puzzle3D onSolved={() => setIsUnlocked(true)} />
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <SocialCard 
            href="https://www.linkedin.com/in/angelo-rakotonirina-5240b518a/"
            icon={<LinkedInIcon />}
            label="LinkedIn"
            color="blue"
            detail="Voir mon profil"
          />
          <SocialCard 
            href="https://github.com/angelorak98"
            icon={<GitHubIcon />}
            label="GitHub"
            color="gray"
            detail="Voir mes repos"
          />
          <SocialCard 
            href="mailto:rak.angelo98@gmail.com"
            icon={<EmailIcon />}
            label="Email"
            color="teal"
            detail="rak.angelo98@gmail.com"
            copyValue="rak.angelo98@gmail.com"
          />
          <SocialCard 
            href="https://wa.me/261386327975"
            icon={<WhatsAppIcon />}
            label="WhatsApp"
            color="green"
            detail="+261 38 63 279 75"
            copyValue="+261 38 63 279 75"
          />
          <SocialCard
            href={gmapsUrl}
            icon={<LocationIcon />}
            label="Localisation"
            color="red"
            detail={address}
            copyValue={address}
          />
        </div>
      )}
      {isUnlocked && (
        <p className="text-slate-500 text-xs mt-4 text-center w-full animate-pulse">
          💡 Astuce : Cliquez sur les détails pour copier les informations
        </p>
      )}
    </div>
  );
};