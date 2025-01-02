import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  color: string;
  index: number;
}

const colorVariants = {
  purple: 'from-purple-500/20 to-purple-500/5',
  blue: 'from-blue-500/20 to-blue-500/5',
  emerald: 'from-emerald-500/20 to-emerald-500/5',
  red : 'from-red-500/20 to-red-500/5'
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  skills,
  color,
  index
}) => {
  return (
    <div 
      className="group relative"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${colorVariants[color as keyof typeof colorVariants]} rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100`} />
      <div className="relative p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-zinc-400">{company} • {period}</p>
          </div>
          <span className="p-2 rounded-full bg-zinc-800/50 group-hover:bg-zinc-800 transition-colors">
            <ArrowUpRight size={20} className="text-zinc-400 group-hover:text-white transition-colors" />
          </span>
        </div>

        <ul className="space-y-2 mb-6">
          {description.map((item, i) => (
            <li key={i} className="text-zinc-300 flex items-start gap-2">
              <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="text-xs px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}