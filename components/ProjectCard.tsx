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
            <span>Survolez pour voir les détails</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </div>
        </div>

        {/* Face arrière */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-slate-800 p-8 border border-teal-500/50 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col shadow-xl shadow-teal-900/20">
          <h3 className="text-lg font-bold text-teal-400 mb-2">{project.title}</h3>
          <p className="text-slate-300 text-xs mb-4 flex-grow overflow-y-auto leading-relaxed custom-scrollbar pr-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-slate-700/50 text-teal-200/70 text-[10px] font-mono px-2 py-0.5 rounded border border-slate-600/30">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-center pt-2 border-t border-slate-700/50">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-900 bg-teal-500 hover:bg-teal-400 font-bold py-1.5 px-4 rounded-full text-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-teal-500/20"
            >
              <span>Voir le projet</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
