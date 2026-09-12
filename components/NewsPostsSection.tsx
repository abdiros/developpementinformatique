import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  Clock, 
  User, 
  Terminal, 
  Cpu, 
  FolderGit2, 
  ExternalLink
} from 'lucide-react';
import { NewsPost, PostCategory } from '../types';
import { POSTS } from '../posts';

const POSTS_PER_PAGE = 4; // 2x2 grid matching the screenshot

const CATEGORY_LABELS: Record<PostCategory, { label: string; color: string; bgLight: string; bgDark: string; border: string }> = {
  python: {
    label: 'Python',
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'dark:bg-blue-950/40',
    border: 'border-blue-200 dark:border-blue-800'
  },
  algo: {
    label: 'Algo',
    color: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'dark:bg-purple-950/40',
    border: 'border-purple-200 dark:border-purple-800'
  },
  projet: {
    label: 'Projet',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50',
    bgDark: 'dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800'
  }
};

const NewsPostsSection: React.FC = () => {
  // Driven strictly and securely from the in-code array (posts.ts) - Visitors cannot publish unauthorized posts
  const posts: NewsPost[] = POSTS;
  const categoriesRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<'all' | PostCategory>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activePost, setActivePost] = useState<NewsPost | null>(null);

  // Filter posts by category
  const filteredPosts = posts.filter(post => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const validPage = Math.min(currentPage, totalPages);
  const startIndex = (validPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Scroll smoothly back to categories section
  const scrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle category change
  const handleCategoryChange = (cat: 'all' | PostCategory) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    scrollToCategories();
  };

  // Pagination controls with smooth return to categories
  const handlePrevPage = () => {
    if (validPage > 1) {
      setCurrentPage(validPage - 1);
      scrollToCategories();
    }
  };

  const handleNextPage = () => {
    if (validPage < totalPages) {
      setCurrentPage(validPage + 1);
      scrollToCategories();
    }
  };

  return (
    <section className="w-full max-w-5xl mx-auto mt-16 px-4">
      {/* Categories Filter Tabs with ref for smooth scroll */}
      <div 
        ref={categoriesRef} 
        id="posts-categories"
        className="flex flex-wrap items-center justify-center gap-2 mb-8 scroll-mt-24"
      >
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:border-slate-400'
          }`}
        >
          Tous ({posts.length})
        </button>

        <button
          onClick={() => handleCategoryChange('python')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === 'python'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:border-blue-400'
          }`}
        >
          <Terminal size={15} />
          <span>Python</span>
        </button>

        <button
          onClick={() => handleCategoryChange('algo')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === 'algo'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:border-purple-400'
          }`}
        >
          <Cpu size={15} />
          <span>Algo</span>
        </button>

        <button
          onClick={() => handleCategoryChange('projet')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            selectedCategory === 'projet'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-gray-200 dark:border-slate-800 hover:border-emerald-400'
          }`}
        >
          <FolderGit2 size={15} />
          <span>Projet</span>
        </button>
      </div>

      {/* 2x2 Grid matching the user's reference image */}
      {currentPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {currentPosts.map((post, idx) => {
            const catInfo = CATEGORY_LABELS[post.category] || CATEGORY_LABELS.python;
            const postId = post.id || `post-${idx}`;

            const handlePostClick = () => {
              if (post.content) {
                setActivePost(post);
              } else if (post.sourceUrl) {
                window.open(post.sourceUrl, '_blank', 'noopener,noreferrer');
              } else {
                setActivePost(post);
              }
            };

            return (
              <div
                key={postId}
                onClick={handlePostClick}
                className="group cursor-pointer flex flex-col items-center transition-all duration-300"
              >
                {/* Image Container with high contrast border & hover effect */}
                <div className="w-full aspect-[16/10] sm:aspect-[16/10] rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border-2 border-transparent group-hover:border-indigo-600 dark:group-hover:border-indigo-400 shadow-md group-hover:shadow-xl transition-all duration-300 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag on image */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-lg uppercase tracking-wider backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-sm ${catInfo.color}`}>
                      {catInfo.label}
                    </span>
                  </div>

                  {/* Date badge if provided */}
                  {post.date && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-md backdrop-blur-md bg-black/60 text-white flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                    </div>
                  )}
                </div>

                {/* Centered Title directly beneath image */}
                <div className="w-full text-center mt-3 px-2">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-base sm:text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                  {post.source ? (
                    <div className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                      <ExternalLink size={11} />
                      <span>Source : {post.source}</span>
                    </div>
                  ) : post.sourceUrl ? (
                    <div className="mt-1 flex items-center justify-center gap-1 text-[11px] font-semibold text-blue-500">
                      <ExternalLink size={11} />
                      <span>Voir la ressource</span>
                    </div>
                  ) : null}
                  {post.summary && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 max-w-sm mx-auto">
                      {post.summary}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-800 max-w-lg mx-auto">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Aucun post trouvé dans cette catégorie.
          </p>
        </div>
      )}

      {/* Pagination Controls - Exact circular black buttons from reference image */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center justify-center gap-2 mt-10">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrevPage}
              disabled={validPage === 1}
              aria-label="Page précédente"
              className="w-10 h-10 rounded-full bg-black hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md active:scale-90 cursor-pointer"
            >
              <ChevronLeft size={22} strokeWidth={2.5} />
            </button>

            <button
              onClick={handleNextPage}
              disabled={validPage === totalPages}
              aria-label="Page suivante"
              className="w-10 h-10 rounded-full bg-black hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white flex items-center justify-center transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed shadow-md active:scale-90 cursor-pointer"
            >
              <ChevronRight size={22} strokeWidth={2.5} />
            </button>
          </div>

          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Page {validPage} sur {totalPages}
          </span>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 📖 POST READER MODAL ("Make it for post not page") */}
      {/* ========================================================================= */}
      {activePost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActivePost(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-slate-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with image */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-900 overflow-hidden">
              <img 
                src={activePost.imageUrl} 
                alt={activePost.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActivePost(null)}
                aria-label="Fermer"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-90"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-md ${CATEGORY_LABELS[activePost.category]?.color}`}>
                  {CATEGORY_LABELS[activePost.category]?.label}
                </span>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Meta information */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pb-4 border-b border-gray-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {activePost.date}
                </span>
                {activePost.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {activePost.readTime}
                  </span>
                )}
                {activePost.author && (
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    {activePost.author}
                  </span>
                )}
                {activePost.source && (
                  <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold">
                    <ExternalLink size={14} />
                    {activePost.sourceUrl ? (
                      <a 
                        href={activePost.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-700"
                      >
                        Source : {activePost.source}
                      </a>
                    ) : (
                      <span>Source : {activePost.source}</span>
                    )}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {activePost.title}
              </h2>

              {/* Summary highlight */}
              {activePost.summary && (
                <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 text-blue-900 dark:text-blue-200 text-sm leading-relaxed font-medium">
                  {activePost.summary}
                </div>
              )}

              {/* Body */}
              <div className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {activePost.content}
              </div>

              {/* Footer action */}
              <div className="pt-6 border-t border-gray-100 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setActivePost(null)}
                  className="px-5 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default NewsPostsSection;
