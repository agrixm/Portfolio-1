import React from 'react';
import type { Skill } from './types';

export const SkillCard: React.FC<Skill> = ({ name, icon: Icon, color }) => {
  const colorVariants = {
    purple: 'hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-400',
    blue: 'hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400',
    emerald: 'hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400',
    amber: 'hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-400',
    rose: 'hover:bg-rose-500/10 hover:border-rose-500/50 hover:text-rose-400'
  };

  return (
    <div 
      className={`group flex items-center gap-3 p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 cursor-pointer ${colorVariants[color]}`}
    >
      <div className="p-2 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors">
        <Icon size={20} />
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
}