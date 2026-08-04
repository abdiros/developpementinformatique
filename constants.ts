import { ModuleData, CustomResource, CategoryType } from './types';

export const MODULES: ModuleData[] = [


  // 1ère Année - Développement
  {
    id: 'm101',
    code: 'M101',
    title: 'Python',
    year: 1,
    counts: { cours: 4, exercices: 4 }
  },

  // 2ème Année - Développement
  {
    id: 'm201',
    code: 'M201',
    title: "Développement Back-end avancé (PHP/Laravel)",
    year: 2,
    counts: { cours: 0, exercices: 0 }
  },
  
];

export const MOCK_RESOURCES = [
  { title: "Support de cours standard", size: "1.2 MB", date: "2023" },
  { title: "Exercices d'application", size: "0.8 MB", date: "2023" },
  { title: "Dossier de ressources", size: "2.4 MB", date: "2023" },
];

/**
 * CONFIGURATION DES LIENS (URL)
 * 
 * Pour ajouter vos propres liens :
 * 1. Trouvez le module correspondant (ex: "M101")
 * 2. Ajoutez un objet dans la catégorie souhaitée (cours, exercices, etc.)
 * 3. Remplissez 'title' et 'url'
 * 
 * Si une liste est vide ou incomplète, le site générera des ressources fictives pour combler le vide.
 */
export const CUSTOM_RESOURCES: Record<string, Partial<Record<CategoryType, CustomResource[]>>> = {
  
  // ==========================================
  // 1ÈRE ANNÉE
  // ==========================================
  "M101": {
    cours: [
      { title: "Python : Introduction", url: "https://drive.google.com/file/d/1bHQqQJjj__YNN_C99NNpUzkRVgkNu1xg/view?usp=drive_open", size: "2 KB", date: "27 Juil 2023" },
      { title: "Python : Variables", url: "#", size: "1.5 MB", date: "15 Sept 2023" },
      { title: "Python : Operators", url: "#", size: "1.5 MB", date: "15 Sept 2023" },
      { title: "Python : Strings", url: "#", size: "1.5 MB", date: "15 Sept 2023" },
    ],
    exercices: [
      { title: "Série d'exercices N°1 - Introduction", url: "#", size: "0.4 MB", date: "18 Sept 2023" },
      { title: "Série d'exercices N°2 - Operators", url: "#", size: "0.4 MB", date: "18 Sept 2023" },
      { title: "Série d'exercices N°3 - Variables", url: "#", size: "0.4 MB", date: "18 Sept 2023" },
      { title: "Série d'exercices N°4 - Strings", url: "#", size: "0.4 MB", date: "18 Sept 2023" },
    ]
  },


  // ==========================================
  // 2ÈME ANNÉE
  // ==========================================

  "M201": {
    cours: [
      { title: "Rappels PHP", url: "#", size: "1.5 MB", date: "10 Sept 2024" },
      
    ],
    exercices: [
      { title: "Série d'exercices N°1 - Variables", url: "#", size: "0.4 MB", date: "18 Sept 2023" }
    ]
  },

};