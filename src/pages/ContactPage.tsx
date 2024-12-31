import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="ml-20 min-h-screen bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <div className="max-w-3xl mx-auto px-6 py-48">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Have a project in mind? Let's work together to create something amazing.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4">
        <Mail className="text-zinc-400" />
        <a href="mailto:agrimsangotra@gmail.com" className="text-white hover:text-zinc-400 transition-colors">
          agrimsangotra@gmail.com
        </a>
          </div>
          <div className="flex items-center gap-4">
        <MapPin className="text-zinc-400" />
        <span className="text-zinc-400">Delhi,India</span>
          </div>
        </div>
          </div>
          
          <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
        Name
          </label>
          <input
        type="text"
        id="name"
        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
        Email
          </label>
          <input
        type="email"
        id="email"
        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
        Message
          </label>
          <textarea
        id="message"
        rows={4}
        className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors"
        >
          Send Message <Send size={16} />
        </button>
          </form>
        </div>
      </div>
    </div>
  );
}