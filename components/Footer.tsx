import React from 'react';
import { Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 mt-auto dark:bg-slate-900 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-blue-600 dark:text-blue-500">
               <Code size={20} />
               <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">Développement Informatique</h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Ressources pédagogiques complètes pour les étudiants de la filière Développement Informatique (OFPPT).
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center">
            <SocialIcon href="#" label="Facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </SocialIcon>
            <SocialIcon href="#" label="YouTube">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </SocialIcon>
            <SocialIcon href="#" label="WhatsApp">
               <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </SocialIcon>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-left">
             &copy; {new Date().getFullYear()} Développement Informatique – by AbderrazzaQ. Tous droits réservés.
           </p>
           <div className="flex gap-6 text-xs text-slate-400 dark:text-slate-500">
             <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Mentions légales</a>
             <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Plan du site</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, children }: { href: string, label: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {children}
    </svg>
  </a>
);

export default Footer;