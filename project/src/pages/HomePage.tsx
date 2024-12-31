import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectCard } from '../components/ProjectCard';
import { StackSection } from '../components/Stack/StackSection';
import { projects } from '../data/projects';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <section className="ml-20 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <StackSection />
    </div>
  );
}