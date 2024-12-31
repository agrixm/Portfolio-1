import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelors of Technology in Computer Science and Engineering",
    school: "SRM Institute of Science and Technology",
    year: "2023 - 2027",
    description: "Pursuing a degree in Computer Science and Engineering with a focus on Software Engineering "
  },
  {
    degree: "High School Degree",
    school: "M.H.A.C School",
    year: "2010 - 2020",
    description: "Pursued Science stream with Physics, Chemistry, and Mathematics"
  }
];

export const EducationSection: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Education</h2>
      <div className="space-y-6">
        {education.map((item) => (
          <div 
            key={item.degree}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-purple-500 before:to-blue-500"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 bg-zinc-950 p-1">
              <GraduationCap className="text-purple-500" size={20} />
            </div>
            <div className="border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
              <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
              <p className="text-zinc-400 mb-2">{item.school} • {item.year}</p>
              <p className="text-zinc-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}