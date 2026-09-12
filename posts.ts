import { NewsPost } from './types';

// =========================================================================
// 📰 LISTE DES POSTS (PYTHON, ALGO, PROJET)
//
// Pour ajouter un post, ajoutez simplement :
// {
//   title: 'Titre du post',
//   category: 'python', // 'python' | 'algo' | 'projet'
//   imageUrl: 'https://...',
//   sourceUrl: 'https://...'
// }
// (Les autres champs comme 'summary', 'source', 'content' sont facultatifs !)
// =========================================================================

export const POSTS: NewsPost[] = [
  {
    title: 'Python: Les Décorateurs en 5 minutes',
    category: 'python',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://docs.python.org/3/',
    source: 'Python Docs',
    summary: 'Comprendre facilement les décorateurs (@decorator) et enrichir vos fonctions en Python.'
  },
  {
    title: 'Python: Maîtriser la Programmation Orientée Objet (POO)',
    category: 'python',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://docs.python.org/fr/3/tutorial/classes.html',
    source: 'Python Docs',
    summary: 'Classes, objets, méthodes, héritage et encapsulation en Python.'
  },
  {
    title: 'Algo: Guide complet de la complexité temporelle (Big-O)',
    category: 'algo',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://www.bigocheatsheet.com/',
    source: 'Big-O CheatSheet',
    summary: 'Comprendre O(1), O(n), O(n log n) et optimiser vos algorithmes.'
  },
  {
    title: 'Projet: Mini-application de gestion SQLite & Python',
    category: 'projet',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    sourceUrl: 'https://github.com',
    source: 'Dépôt GitHub',
    summary: 'Architecture CRUD complète pour la gestion des données avec SQLite.'
  },
];
