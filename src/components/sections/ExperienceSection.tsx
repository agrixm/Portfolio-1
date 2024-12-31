import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceCard } from './ExperienceCard';

const experiences = [
  {
    title: "Admin Lead",
    company: "Webytes",
    period: "Aug 2024 - Present",
    description: [
      "Managing a team of 10+ designers,developers and Video Editors",
      "Working on Club's website",
      "Creating and managing content for social media platforms"

    ],
    skills: ["React","Next.js", "Management","Communication Skills","Leadership"],
    color: "purple"
  },
  {
    title: "Web Developer",
    company: "Cyberzee",
    period: "July 2024 - Oct 2024",
    description: [
      "Created Design system for the Club's website",
      
    ],
    skills: ["HTMl", "CSS", "JavaScript"],
    color: "blue"
  },
  {
    title: "Designer",
    company: "Webytes",
    period: "April 2024 - Aug 2024",
    description: [
      "Created content for social media platforms i.e Posters, Thumbnails, etc",
      "Collaborated with the team Leads to create a UI/UX for the Project they were working on",
    ],
    skills: ["Figma", "Framer", "Canva"],
    color: "emerald"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <Briefcase className="text-purple-500" size={24} />
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard 
            key={experience.title} 
            {...experience} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}