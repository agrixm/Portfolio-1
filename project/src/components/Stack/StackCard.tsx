import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StackCardProps {
  title: string;
  description: string;
  skills: string[];
  Icon: LucideIcon;
}

export const StackCard: React.FC<StackCardProps> = ({ title, description, skills, Icon }) => {
  return (
    <div className="group p-6 border border-zinc-800 rounded-xl transition-all hover:border-zinc-700 bg-zinc-900/50">
      <div className="mb-4">
        <Icon size={32} className="text-zinc-400 group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill}
            className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}