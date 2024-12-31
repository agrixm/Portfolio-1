import React from 'react';
import { SkillsSection } from '../components/sections/SkillsSection';
import { EducationSection } from '../components/sections/EducationSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900/50 to-zinc-950 pt-20 pl-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="space-y-20">
          <section>
            <p className="text-xl text-zinc-400 mb-8">
              I'm a passionate developer and designer with over 5 years of experience in creating 
              digital experiences that make a difference.
            </p>
          </section>
          
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
}