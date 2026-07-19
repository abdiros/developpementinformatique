import React from 'react';
import { BookOpen, PenTool } from 'lucide-react';
import { ModuleData, CategoryType } from '../types';

interface ModuleCardProps {
  module: ModuleData;
  onOpenResource: (module: ModuleData, category: CategoryType) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onOpenResource }) => {
  const ButtonAction = ({ 
    count, 
    type, 
    icon: Icon, 
    label, 
    colorClass 
  }: { 
    count: number; 
    type: CategoryType; 
    icon: any; 
    label: string; 
    colorClass: string 
  }) => {
    const isDisabled = count === 0;
    
    const baseClasses = "flex flex-col items-center justify-center py-4 px-2 rounded-lg transition-all duration-200 w-full h-full";
    const activeClasses = `${colorClass} text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95`;
    const disabledClasses = "bg-gray-200 dark:bg-slate-800 text-gray-400 dark:text-slate-600 cursor-not-allowed";

    return (
      <button
        onClick={() => !isDisabled && onOpenResource(module, type)}
        disabled={isDisabled}
        className={`${baseClasses} ${isDisabled ? disabledClasses : activeClasses}`}
      >
        <Icon size={24} className="mb-2" strokeWidth={2.5} />
        <span className="text-xs font-bold tracking-wide mb-0.5">{label}</span>
        <span className="text-xs font-bold opacity-90">({count})</span>
      </button>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 p-6 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-all duration-300 flex flex-col h-full group">
      <div className="mb-6 text-center">
        <h3 className="text-blue-600 dark:text-blue-400 font-extrabold text-base sm:text-lg mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
          {module.code}: {module.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto">
        <ButtonAction 
          type="cours" 
          count={module.counts.cours} 
          icon={BookOpen} 
          label="Cours" 
          colorClass="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500" 
        />
        
        <ButtonAction 
          type="exercices" 
          count={module.counts.exercices} 
          icon={PenTool} 
          label="Exercices" 
          colorClass="bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500" 
        />
      </div>
    </div>
  );
};

export default ModuleCard;