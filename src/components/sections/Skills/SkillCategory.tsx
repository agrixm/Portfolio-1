import React from 'react';
import { SkillCard } from './Skillcard';
import type { Skill } from './types';

interface SkillCategoryProps {
  title: string;
  description: string;
  skills: Skill[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, description, skills }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2 text-zinc-200">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}