import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { MODULES } from '../constants';
import ModuleCard from './ModuleCard';
import ResourceModal from './ResourceModal';
import { ModuleData, CategoryType } from '../types';

const YearDashboard: React.FC = () => {
  const { yearId } = useParams<{ yearId: string }>();
  const navigate = useNavigate();
  const year = parseInt(yearId || '1') as 1 | 2;

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    module: ModuleData | null;
    category: CategoryType | null;
  }>({
    isOpen: false,
    module: null,
    category: null,
  });

  const modules = MODULES.filter(m => m.year === year);

  const handleOpenResource = (module: ModuleData, category: CategoryType) => {
    setModalState({
      isOpen: true,
      module,
      category,
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  if (![1, 2].includes(year)) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Année introuvable</h2>
        <button onClick={() => navigate('/')} className="text-blue-600 hover:underline">
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Navigation */}
      <div className="mb-8 sm:mb-12 text-center sm:text-left">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:bg-blue-50 dark:hover:bg-slate-900 px-3 py-2 rounded-lg transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Retour à l'accueil
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
          {year === 1 ? '1ère année' : '2ème année'}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {year === 1 
            ? 'Fondamentaux du développement et algorithmique' 
            : 'Développement Fullstack, Mobile et Spécialisation'
          }
        </p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            onOpenResource={handleOpenResource}
          />
        ))}
      </div>

      {/* Modal */}
      <ResourceModal 
        isOpen={modalState.isOpen}
        module={modalState.module}
        category={modalState.category}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default YearDashboard;