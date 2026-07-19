import React from 'react';
import { X, FileText, Download, ExternalLink } from 'lucide-react';
import { ModuleData, CategoryType } from '../types';
import { MOCK_RESOURCES, CUSTOM_RESOURCES } from '../constants';

interface ResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: ModuleData | null;
  category: CategoryType | null;
}

const ResourceModal: React.FC<ResourceModalProps> = ({ isOpen, onClose, module, category }) => {
  if (!isOpen || !module || !category) return null;

  const categoryLabels: Record<CategoryType, string> = {
    cours: 'Cours',
    exercices: 'Exercices',
    controles: 'Contrôles',
    efm: 'Examens de Fin de Module (EFM)',
  };

  // Check if we have custom resources defined for this module and category
  const customResources = CUSTOM_RESOURCES[module.code]?.[category] || [];
  
  // Get the total count expected for this category, defaulting to 0 if undefined
  const totalCount = module.counts[category] || 0;
  
  // Calculate how many more we need to generate to match the count (if any)
  const remainingCount = Math.max(0, totalCount - customResources.length);

  // Generate the resources list
  const generatedResources = Array.from({ length: remainingCount }).map((_, i) => {
    const mockBase = MOCK_RESOURCES[i % MOCK_RESOURCES.length];
    const generatedTitle = `${module.code} : ${mockBase.title} ${i + 1 + customResources.length}`;
    
    return {
      title: generatedTitle,
      size: mockBase.size,
      date: mockBase.date,
      url: "#"
    };
  });

  // Combine custom and generated resources
  const allResources = [
    ...customResources.map(r => ({ ...r, isCustom: true })),
    ...generatedResources
  ].map((res, index) => ({
    id: `res-${index}`,
    ...res
  }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 dark:border-slate-800 flex justify-between items-start bg-slate-50 dark:bg-slate-950">
          <div>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {categoryLabels[category]} - {module.code}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-400 font-medium line-clamp-1">
              {module.title}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 dark:hover:bg-slate-800 dark:hover:text-slate-300 p-1 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 custom-scrollbar bg-white dark:bg-slate-900">
          {allResources.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-gray-400 dark:text-slate-600">
              <FileText size={48} className="mb-3 opacity-20" />
              <p>Aucune ressource disponible pour le moment.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {allResources.map((res) => (
                <div 
                  key={res.id} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-lg hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900 transition-all group"
                >
                  <div className="flex items-start gap-3 mb-3 sm:mb-0">
                    <div className="mt-1 p-2 bg-red-50 dark:bg-slate-800 text-red-500 dark:text-red-400 rounded-lg">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                        {res.title}
                      </h4>
                      <div className="flex gap-3 text-xs text-gray-400 dark:text-slate-500 mt-1">
                        <span>PDF</span>
                        <span>•</span>
                        <span>{res.size}</span>
                        <span>•</span>
                        <span>{res.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-0 sm:pl-4">
                    <a 
                      href={res.url}
                      target={res.url !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium border rounded-lg transition-colors no-underline ${
                        res.url !== '#' 
                        ? 'text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20' 
                        : 'text-gray-400 border-gray-200 dark:border-slate-800 cursor-not-allowed bg-gray-50 dark:bg-slate-900'
                      }`}
                      onClick={(e) => res.url === '#' && e.preventDefault()}
                    >
                      <ExternalLink size={14} />
                      Ouvrir
                    </a>
                    <a 
                      href={res.url}
                      target={res.url !== '#' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white shadow-sm rounded-lg transition-colors no-underline ${
                        res.url !== '#'
                        ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 shadow-green-200 dark:shadow-none'
                        : 'bg-gray-300 dark:bg-slate-800 cursor-not-allowed shadow-none'
                      }`}
                      onClick={(e) => res.url === '#' && e.preventDefault()}
                    >
                      <Download size={14} />
                      Télécharger
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 text-center text-xs text-gray-400 dark:text-slate-600">
          Développement Informatique - Professeur Youssef
        </div>
      </div>
    </div>
  );
};

export default ResourceModal;