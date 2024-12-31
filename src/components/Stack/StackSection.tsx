import React from 'react';
import { Code2, Palette, Database, Layout, Server, Shield } from 'lucide-react';
import { StackCard } from './StackCard';

const stackItems = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications using React, Next.js, and TypeScript',
    skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
    Icon: Layout
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable server-side solutions with Node.js and modern frameworks',
    skills: ['Node.js', 'Express'],
    Icon: Server
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database structures for efficient data handling',
    skills: ['PostgreSQL'],
    Icon: Database
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting beautiful and intuitive user interfaces with modern design tools',
    skills: ['Figma', 'Framer', 'Prototyping', 'Design Systems'],
    Icon: Palette
  },
  {
    title: 'DevOps',
    description: 'Implementing efficient development workflows and deployment strategies',
    skills: ['GIT','CI/CD'],
    Icon: Code2
  },
  
];

export const StackSection: React.FC = () => {
  return (
    <section className="ml-20 py-20 px-6 bg-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Here are the technologies and tools I use to bring ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item) => (
            <StackCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}