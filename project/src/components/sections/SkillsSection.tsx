import React from 'react';
import { Code2 } from 'lucide-react';
import { SkillCategory } from './Skills/SkillCategory';
import { skillsData } from './Skills/skillsdata';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Code2 className="text-purple-500" size={24} />
        Skills & Expertise
      </h2>
      <div className="space-y-12">
        {skillsData.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}