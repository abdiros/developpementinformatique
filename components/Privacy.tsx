import React from 'react';
import { Shield, EyeOff, Lock, FileText, CheckCircle } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
      {/* Page Header */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-500 mb-4 shadow-sm">
          <Shield size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          Politique de Confidentialité
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Votre vie privée est essentielle pour nous. Lisez notre politique simple et transparente.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm p-6 sm:p-10 space-y-10">
        
        {/* Section 1: Introduction */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
            <FileText size={20} className="text-blue-600 dark:text-blue-500" />
            <span>1. Introduction</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Chez <strong>Développement Informatique (par DEV WEB SOLUTIONS)</strong>, nous accordons une grande importance à la protection de la vie privée de nos utilisateurs. Cette Politique de Confidentialité décrit comment nous traitons vos informations lorsque vous utilisez notre site web.
          </p>
        </div>

        {/* Section 2: Data Collection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
            <EyeOff size={20} className="text-indigo-600 dark:text-indigo-500" />
            <span>2. Collecte de données</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            <strong>Nous ne recueillons aucune donnée personnelle identifiable.</strong> Vous pouvez naviguer sur notre site, consulter les ressources, télécharger des cours ou utiliser nos services sans avoir à créer un compte ni à nous fournir d'informations d'identité (nom, adresse, numéro de téléphone, etc.).
          </p>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
              <CheckCircle size={16} className="text-emerald-500" />
              Stockage Local (LocalStorage) :
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Nous utilisons le stockage local de votre navigateur uniquement pour enregistrer vos préférences d'affichage (comme le mode sombre ou le mode clair). Ces données restent localement sur votre appareil et ne sont jamais transmises à nos serveurs.
            </p>
          </div>
        </div>

        {/* Section 3: Data Security */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
            <Lock size={20} className="text-blue-600 dark:text-blue-500" />
            <span>3. Sécurité des informations</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Étant donné que nous ne collectons aucune donnée personnelle sur des serveurs externes, les risques de piratage de données sont extrêmement limités. De plus, notre site utilise un protocole HTTPS hautement sécurisé pour garantir que votre connexion à notre plateforme est cryptée et sécurisée.
          </p>
        </div>

        {/* Section 4: External Links */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-bold text-lg border-b border-slate-100 dark:border-slate-800 pb-2">
            <Shield size={20} className="text-indigo-600 dark:text-indigo-500" />
            <span>4. Liens tiers</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Notre site contient des liens vers d'autres plateformes externes (comme Google Drive pour l'accès aux cours en PDF, ou des sites web tiers d'exercices). Veuillez noter que nous ne sommes pas responsables des pratiques de confidentialité de ces sites externes. Nous vous invitons à consulter leurs propres politiques.
          </p>
        </div>

        {/* Section 5: Contact and Updates */}
        <div className="p-6 bg-blue-50/50 dark:bg-slate-800/80 rounded-2xl border border-blue-100/50 dark:border-slate-700/50">
          <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mb-2">
            Questions ou suggestions ?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            Si vous avez des questions concernant cette politique de confidentialité ou l'utilisation du site, vous pouvez nous écrire à l'adresse e-mail suivante :
          </p>
          <a 
            href="mailto:devwebsolutuions@gmail.com" 
            className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors"
          >
          devwebsolutions@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default Privacy;
