import React from 'react';

interface GalleryCardProps {
  title: string;
  image: string;
  category: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ title, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title}
        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm text-zinc-400 mb-1">{category}</p>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}