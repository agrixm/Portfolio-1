import React from 'react';

interface GalleryCardProps {
  title: string;
  image: string;
  category: string;
  size?: 'default' | 'large' | 'tall' | 'wide';
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ 
  title, 
  image, 
  category,
  size = 'default'
}) => {
  const sizeClasses = {
    default: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-2',
    tall: 'col-span-1 row-span-2',
    wide: 'col-span-3 row-span-1'
  };

  const aspectClasses = {
    default: 'aspect-square',
    large: 'aspect-square',
    tall: 'aspect-[16/9]',
    wide: 'aspect-[16/9]'
  };

  return (
    <div className={`group relative overflow-hidden rounded-xl ${sizeClasses[size]}`}>
      <img 
        src={`/images/designs/${image}`}
        alt={title}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${aspectClasses[size]}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm text-zinc-400 mb-2">{category}</p>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}