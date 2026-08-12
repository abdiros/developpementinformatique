import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, User, HelpCircle, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-16">
      {/* Page Header */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-500 mb-4 shadow-sm">
          <Mail size={40} strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          Contactez-nous
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          Une suggestion, un module manquant ou une question ? Nous sommes à votre écoute.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-3 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-8 animate-in zoom-in-95 duration-300">
              <div className="inline-flex p-3 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 mb-4">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Message envoyé avec succès !
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-6">
                Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais à l'adresse e-mail indiquée.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 text-sm font-semibold rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Nom Complet *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 dark:text-slate-100 transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Adresse E-mail *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 dark:text-slate-100 transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Sujet / Motif (Optionnel)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <HelpCircle size={16} />
                  </span>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 dark:text-slate-100 transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Votre Message *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3.5 text-slate-400">
                    <MessageSquare size={16} />
                  </span>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-slate-800 dark:text-slate-100 transition-all resize-none"
                    placeholder="Saisissez votre message ici..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md shadow-blue-100 dark:shadow-none transition-all duration-150 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-lg border border-slate-800">
            <h3 className="text-lg font-bold mb-4">Canal de Direct</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Vous préférez envoyer directement un e-mail depuis votre client de messagerie préféré ? Écrivez-nous directement à :
            </p>
            
            <a 
              href="mailto:devwebsolutions@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-300 hover:text-blue-200 font-semibold text-sm transition-all border border-slate-700/50 mb-6"
            >
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span className="truncate">devwebsolutions@gmail.com</span>
            </a>

            <div className="border-t border-slate-800 pt-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Disponibilité
                </h4>
                <p className="text-xs text-slate-300">
                  Réponse sous 24 à 48 heures.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Branding
                </h4>
                <p className="text-xs text-slate-300 font-mono">
                  DEV WEB SOLUTIONS solutions éducatives
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm mb-2">
              Contribuer au projet
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Si vous êtes enseignant ou étudiant et que vous souhaitez partager vos propres séries d'exercices corrigés ou examens blancs, n'hésitez pas à nous les envoyer par e-mail afin de les intégrer à la plateforme !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
