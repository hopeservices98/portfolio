import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group h-80 [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Face avant */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800/40 p-8 border border-slate-700/50 flex flex-col items-center justify-center [backface-visibility:hidden] hover:border-teal-500/30 transition-colors">
          <h3 className="text-2xl font-bold text-slate-100 text-center mb-6">{project.title}</h3>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="bg-slate-700/50 text-teal-200/80 text-xs font-mono px-3 py-1.5 rounded-full border border-slate-600/50">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-slate-700/50 text-slate-400 text-xs font-mono px-3 py-1.5 rounded-full border border-slate-600/50">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 text-teal-400/80 text-sm font-medium animate-pulse">
            <span>Voir les détails</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 p-8 border border-teal-500/50 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col shadow-xl shadow-teal-900/20">
          <h3 className="text-xl font-bold text-teal-400 mb-4">{project.title}</h3>
          <p className="text-slate-300 text-sm mb-6 flex-grow overflow-y-auto leading-relaxed custom-scrollbar">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700/50 text-teal-200/70 text-xs font-mono px-2 py-1 rounded border border-slate-600/30">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-900 bg-teal-500 hover:bg-teal-400 font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/20"
          >
            Voir le projet
          </a>
        </div>
      </div>
    </div>
  );
};
