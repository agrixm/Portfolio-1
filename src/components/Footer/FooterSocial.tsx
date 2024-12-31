import React from 'react';
import { Github, Twitter, Linkedin,  Instagram } from 'lucide-react';

const socialLinks = [
  { Icon: Github, href: 'https://github.com/agrixm', label: 'GitHub' },
  { Icon: Twitter, href: 'https://x.com/agxrim', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/agrim-sangotra/', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://www.instagram.com/agrxim/', label: 'Instagram' }
];

export const FooterSocial: React.FC = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}