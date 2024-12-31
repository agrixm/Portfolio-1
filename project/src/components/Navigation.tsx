import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, User, Mail } from 'lucide-react';

export const Navigation: React.FC = () => {
  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/about', label: 'About', icon: User },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-zinc-900/50 backdrop-blur-sm border-r border-zinc-800">
      <div className="flex flex-col items-center py-8 h-full">
        <div className="text-2xl font-bold mb-12">A</div>
        <div className="flex-1 flex flex-col gap-8">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `p-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-white text-zinc-900' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`
              }
              title={label}
            >
              <Icon size={24} />
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}