import React from 'react';
import { Info, BookOpen, Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
      {/* Page Header */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-500 mb-4 shadow-sm">
          <Info size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          À propos de la Plateforme
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Découvrez la mission de notre portail d'apprentissage pour la filière Développement Informatique.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Left Side: Detail Cards */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <BookOpen size={20} className="text-blue-600 dark:text-blue-500" />
              Notre Mission
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Cette plateforme éducative est conçue pour être la bibliothèque numérique ultime des étudiants de la filière <strong>Développement Informatique (OFPPT/EFP...)</strong>. Notre objectif principal est de démocratiser l'accès aux cours, exercices, et projets pratiques en regroupant toutes les ressources pédagogiques dans un espace centralisé, intuitif et gratuit.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Que vous soyez en première année pour acquérir les bases de l'algorithmique et du développement web, ou en deuxième année pour vous spécialiser dans les technologies full-stack et mobiles, vous trouverez ici le matériel nécessaire pour réussir vos examens et perfectionner vos compétences.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm transition-all duration-300">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Target size={20} className="text-indigo-600 dark:text-indigo-500" />
              Pourquoi cette plateforme ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Centralisation</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fini la recherche fastidieuse. Tous les modules officiels de l'OFPPT sont classés par année d'étude.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Qualité de Contenu</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Des cours à jour, accompagnés d'exercices corrigés et de projets réels pour s'entraîner efficacement.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Gratuité & Accessibilité</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Un accès 100% libre et illimité, disponible partout et à tout moment pour tous les apprenants.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Expérience Fluide</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Une interface moderne, réactive et un mode sombre agréable pour coder toute la nuit sans fatigue oculaire.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Quick facts / Author */}
        <div className="space-y-6">
          <div className="bg-blue-600 dark:bg-blue-700 text-white p-6 rounded-2xl shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 opacity-10">
              <Award size={150} />
            </div>
            <h3 className="text-lg font-bold mb-2">Conçu par DEV WEB SOLUTIONS</h3>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Créé avec passion par <strong>devwebsol</strong> pour soutenir et accompagner la communauté des futurs développeurs du Maroc.
            </p>
            <div className="border-t border-white/20 pt-4 flex justify-between items-center text-xs text-blue-100">
              <span>Mise à jour</span>
              <span className="font-medium">Juillet 2026</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <Users size={16} className="text-blue-600" />
              Statistiques Clés
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Modules Couverts</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">12+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Niveaux scolaires</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">2 (1ère & 2ème)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-500 dark:text-slate-400">Support Cours/TPs</span>
                <span className="font-bold text-slate-800 dark:text-slate-100">PDF & Numérique</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
