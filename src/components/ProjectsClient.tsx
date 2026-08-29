"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const uniqueCategories = Array.from(
    new Set(initialProjects.flatMap(p => p.categories || []))
  ).filter(Boolean);

  const filteredProjects = initialProjects.filter(p => {
    if (filter === "all") return true;
    const searchString = ((p.categories || []).concat(p.tech || [])).join(" ").toLowerCase();
    return searchString.includes((filter || "").toLowerCase());
  });
  const currentProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleFilter = (categoryId: string) => {
    setFilter(categoryId);
    setVisibleCount(6);
  };

  return (
    <div className="flex flex-col w-full px-margin-safe max-w-7xl mx-auto py-gutter gap-stack-md overflow-hidden min-h-screen">
      <motion.section 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-stack-md pb-gutter border-b border-outline-variant"
      >
        <h1 className="font-display text-display text-on-surface tracking-tight">Proyek <span className="text-[#00ff41]">Terpilih</span></h1>
        <p className="font-body text-body text-on-surface-variant max-w-2xl">
          A chronological index of developed systems, interfaces, and digital infrastructure. 
          Filter by operational domain or view the complete manifest.
        </p>
        <nav className="flex flex-wrap gap-stack-sm mt-stack-sm">
          <button 
            onClick={() => handleFilter("all")}
            className={`font-metadata text-metadata px-4 py-2 rounded-full border transition-colors uppercase ${
              filter === "all" 
                ? "border-[#00ff41] bg-[#00ff41] text-[#121415]" 
                : "border-outline-variant text-on-surface-variant hover:border-[#00ff41] hover:text-[#00ff41]"
            }`}
          >
            Semua
          </button>
          
          {uniqueCategories.map(cat => (
            <button 
              key={cat}
              onClick={() => handleFilter(cat.toLowerCase())}
              className={`font-metadata text-metadata px-4 py-2 rounded-full border transition-colors uppercase ${
                filter === cat.toLowerCase()
                  ? "border-[#00ff41] bg-[#00ff41] text-[#121415]" 
                  : "border-outline-variant text-on-surface-variant hover:border-[#00ff41] hover:text-[#00ff41]"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </motion.section>

      <motion.section layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter pt-gutter w-full">
        <AnimatePresence mode="popLayout">
          {currentProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Link href={`/projects/${project.slug}`} className="group flex flex-col h-full bg-surface-container-lowest border border-outline-variant overflow-hidden hover:border-[#00ff41] transition-colors cursor-pointer">
                <div className={`relative w-full shrink-0 aspect-video border-b border-outline-variant overflow-hidden ${!project.image && "bg-surface-container-highest"}`}>
                  {project.image ? (
                    <div 
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 ${idx === 1 ? "grayscale group-hover:grayscale-0" : ""}`} 
                      style={{ backgroundImage: `url('${project.image.startsWith("http") ? project.image : (process.env.NEXT_PUBLIC_API_URL + project.image)}')` }}
                    ></div>
                  ) : (
                    <div className="absolute inset-0 bg-outline-variant/10 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                       <span className="material-symbols-outlined text-[48px] text-on-surface-variant">terminal</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 p-stack-md gap-stack-sm">
                  <span className="font-metadata text-metadata text-on-surface-variant uppercase">{(project.categories && project.categories.length > 0) ? project.categories[0] : ((project.tech && project.tech.length > 0) ? project.tech[0] : "Project")}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-[#00ff41] transition-colors">{project.title}</h3>
                  <p className="font-body text-body text-on-surface-variant line-clamp-3">
                    {project.description || project.desc}
                  </p>
                  <div className="flex flex-wrap gap-unit mt-auto pt-stack-sm border-t border-outline-variant">
                    {((project as any).tech || (project as any).tags || []).map((tag: string) => (
                      <span key={tag} className="font-code-snippet text-[10px] text-on-surface px-unit py-0.5 border border-outline-variant">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      {hasMore && (
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="flex justify-center pt-gutter relative z-10 w-full"
        >
          <button 
             onClick={handleLoadMore}
             className="px-6 py-3 border border-outline-variant text-on-surface-variant hover:border-[#00ff41] font-metadata text-metadata uppercase tracking-wider hover:bg-[#00ff41] hover:text-[#121415] transition-colors flex items-center gap-unit"
          >
            Muat Lebih Banyak
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </motion.div>
      )}
      
      {!hasMore && currentProjects.length > 0 && (
         <div className="flex justify-center pt-gutter relative z-10 w-full">
           <span className="font-metadata text-metadata text-on-surface-variant uppercase opacity-50">END_OF_RESULTS</span>
         </div>
      )}
    </div>
  );
}
