import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Info, Shield, Mail, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group mr-2">
          <div className="text-blue-600 dark:text-blue-500 transition-transform group-hover:scale-110 duration-200">
            <Code size={24} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-base sm:text-lg text-slate-800 dark:text-slate-100 tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Développement Informatique
          </span>
        </Link>

        {/* Navigation - Visible icons on mobile, text on desktop */}
        <nav className="flex items-center gap-3 sm:gap-6">
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Info size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">À propos</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Shield size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">Confidentialité</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Mail size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">Contact</span>
          </a>
          
          <div className="h-5 w-px bg-gray-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>

          <button 
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 shadow-sm border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={16} className="text-amber-500" strokeWidth={2.5} />
            ) : (
              <Moon size={16} className="text-blue-500 dark:text-indigo-400" strokeWidth={2.5} />
            )}
            <span className="hidden sm:inline">
              {darkMode ? 'Clair' : 'Sombre'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;