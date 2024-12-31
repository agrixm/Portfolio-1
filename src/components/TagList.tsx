import React from 'react';

interface TagListProps {
  tags: string[];
}

export const TagList: React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="flex gap-2 mb-4">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}