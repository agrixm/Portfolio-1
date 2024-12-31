import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { DesignGallery } from '../components/Gallery/DesignGallery';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900/50 to-zinc-950 pt-20 pl-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-zinc-400">
            Explore my latest work and side projects
          </p>
        </div>

        <div className="space-y-20">
          <section>
            <h2 className="text-2xl font-semibold mb-8 text-zinc-200">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-8 text-zinc-200">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.slice(2).map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </section>
          <DesignGallery />
        </div>
      </div>
    </div>
  );
}