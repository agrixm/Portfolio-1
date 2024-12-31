import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { TagList } from './TagList';

export const ProjectCard: React.FC<Project> = ({ title, description, image, link, tags }) => {
  return (
    <div className="group relative border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent opacity-80" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <TagList tags={tags} />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <a 
          href={link}
          className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all"
        >
          View Project <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
}