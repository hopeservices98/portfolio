
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-slate-800/50 text-teal-400 text-sm font-medium px-5 py-2.5 rounded-full border border-slate-700/50 transition-all duration-300 hover:bg-teal-500 hover:text-slate-900 hover:border-teal-500 cursor-default shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5">
      {skill}
    </span>
  );
};
