import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Info, Shield, Mail, Moon, Sun, Sparkles, Bell, Megaphone, AlertCircle, Gift, Flame } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// =========================================================================
// 🔔 CONFIGURATION DE LA NOTIFICATION SUPERIEURE
// - `enabled`: true pour afficher, false pour masquer.
// - `message`: Votre texte de notification.
// - `icon`: Choisissez parmi: "sparkles" | "bell" | "megaphone" | "info" | "alert" | "gift" | "flame"
// =========================================================================
const NOTIFICATION_CONFIG = {
  enabled: true, // true = Activé, false = Désactivé
  message: "Les leçons seront mises en ligne prochainement.", // Message de notification
  icon: "bell" as "sparkles" | "bell" | "megaphone" | "info" | "alert" | "gift" | "flame",
};

const renderNotificationIcon = (iconName: string) => {
  const props = { size: 14, className: "text-amber-300 shrink-0 animate-pulse" };
  switch (iconName) {
    case "bell": return <Bell {...props} />;
    case "megaphone": return <Megaphone {...props} />;
    case "info": return <Info {...props} />;
    case "alert": return <AlertCircle {...props} />;
    case "gift": return <Gift {...props} />;
    case "flame": return <Flame {...props} />;
    case "sparkles":
    default:
      return <Sparkles {...props} />;
  }
};

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800">
      {/* Top Banner Notification */}
      {NOTIFICATION_CONFIG.enabled && (
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-blue-500/20">
          {renderNotificationIcon(NOTIFICATION_CONFIG.icon)}
          <span>{NOTIFICATION_CONFIG.message}</span>
        </div>
      )}

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
          <Link to="/about" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Info size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">À propos</span>
          </Link>
          <Link to="/privacy" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Shield size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">Confidentialité</span>
          </Link>
          <Link to="/contact" className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full sm:hover:bg-transparent sm:p-0">
            <Mail size={18} strokeWidth={2.5} />
            <span className="hidden md:inline">Contact</span>
          </Link>
          
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