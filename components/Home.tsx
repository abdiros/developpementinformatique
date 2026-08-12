import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, PenTool, Laptop, Database } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 py-8 sm:py-16">
      
      {/* Hero Icon */}
      <div className="mb-6 animate-in zoom-in duration-500">
        <div className="text-blue-600 dark:text-blue-500">
           <GraduationCap size={80} strokeWidth={1.5} />
        </div>
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-500 text-center mb-4 tracking-tight">
        Développement Informatique
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 text-center mb-6">
       DEV WEB SOLUTIONS
      </h2>

      <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Plateforme éducative complète pour les étudiants de la filière Développement Informatique OFPPT/EFP... - Cours, exercices et projets.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed hidden sm:block">
          Cette plateforme a été créée pour être une bibliothèque numérique centralisée, offrant un accès facile et gratuit à toutes les ressources pédagogiques.
        </p>
      </div>

      {/* Main Actions (Years) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mb-16">
        <button 
          onClick={() => navigate('/year/1')}
          className="group relative flex flex-col items-center p-6 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 text-white rounded-xl shadow-lg shadow-green-200 dark:shadow-none transition-all hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center gap-3 mb-2">
             <Laptop size={32} />
             <span className="text-2xl font-bold">1ère année</span>
          </div>
          <span className="text-green-100 text-sm font-medium">Algorithmique, Web & POO</span>
        </button>

        <button 
          onClick={() => navigate('/year/2')}
          className="group relative flex flex-col items-center p-6 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-200 dark:shadow-none transition-all hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="flex items-center gap-3 mb-2">
             <Database size={32} />
             <span className="text-2xl font-bold">2ème année</span>
          </div>
          <span className="text-orange-100 text-sm font-medium">Fullstack, Mobile & DevOps</span>
        </button>
      </div>

      {/* Features Grid - 2 items matching remaining content */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow aspect-square sm:aspect-auto sm:h-auto py-8">
          <div className="text-blue-600 dark:text-blue-500 mb-4">
            <BookOpen size={40} />
          </div>
          <h3 className="font-bold text-gray-800 dark:text-slate-100 text-lg leading-tight">
            Cours<br/>Complets
          </h3>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow aspect-square sm:aspect-auto sm:h-auto py-8">
          <div className="text-indigo-600 dark:text-indigo-500 mb-4">
            <PenTool size={40} />
          </div>
          <h3 className="font-bold text-gray-800 dark:text-slate-100 text-lg leading-tight">
            Exercices
          </h3>
        </div>
      </div>

    </div>
  );
};

export default Home;