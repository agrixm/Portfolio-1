import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

export const FooterNav: React.FC = () => {
  return (
    <nav className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}