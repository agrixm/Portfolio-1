import { 
    Code2, 
    Layout, 
    Database, 
    Server, 
    Palette, 
    Shield,
    Globe,
    Cpu,
   Brush,
   Frame,
   Newspaper
  } from 'lucide-react';
  import type { Skill } from './types';
  
  interface SkillCategory {
    title: string;
    description: string;
    skills: Skill[];
  }
  
  export const skillsData: SkillCategory[] = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications with modern technologies',
      skills: [
        { name: 'React', icon: Code2, color: 'blue' },
        { name: 'TypeScript', icon: Code2, color: 'blue' },
        { name: 'Next.js', icon: Globe, color: 'blue' },
        { name: 'TailwindCSS', icon: Palette, color: 'blue' }
      ]
    },
    {
      title: 'Backend Development',
      description: 'Creating scalable server-side solutions and APIs',
      skills: [
        { name: 'Node.js', icon: Server, color: 'emerald' },
        { name: 'PostgreSQL', icon: Database, color: 'emerald' }
      
      ]
    },
    {
      title: 'Design & Tools',
      description: 'Crafting beautiful user interfaces and maintaining development workflow',
      skills: [
        { name: 'UIzard', icon: Layout, color: 'purple' },
        { name: 'Figma', icon: Palette, color: 'purple' },
        { name: 'canva', icon: Brush, color: 'purple' },
        { name: 'Framer', icon: Frame, color: 'purple' },
        { name: 'Notion', icon: Newspaper, color: 'purple' }
    
      ]
    }
  ];