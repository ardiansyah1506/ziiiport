"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetailClient({ project }: { project: any }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const staggerCont = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerCont}
      className="w-full flex-1 flex flex-col pt-24 pb-section-gap relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-[1280px] w-full mx-auto px-margin-safe flex flex-col gap-12">
        <motion.div variants={fadeUp}>
           <Link href="/projects" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-metadata text-metadata uppercase tracking-wider group mt-4">
             <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
             Back to Projects
           </Link>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto mt-4 px-4">
          <h1 className="font-display text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] leading-[1.1] text-on-background tracking-tighter capitalize selection:bg-primary selection:text-on-primary">
            {project.title}
          </h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl px-4">
            An in-depth exploration of the architecture, technical process, and engineering of <strong className="text-on-background">{project.title}</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="w-full relative mt-6 md:mt-12 px-2 md:px-0">
           <div className="w-full rounded-xl md:rounded-3xl border border-outline-variant/30 bg-surface-container bg-opacity-70 overflow-hidden shadow-2xl backdrop-blur-md">
              <div className="h-10 w-full border-b border-outline-variant/30 flex items-center px-5 gap-2 bg-surface-variant/30 relative">
                 <div className="w-3 h-3 rounded-full bg-error/90 shadow-[0_0_10px_rgba(186,26,26,0.2)]"></div>
                 <div className="w-3 h-3 rounded-full bg-[#fbbc04]/90 shadow-[0_0_10px_rgba(251,188,4,0.2)]"></div>
                 <div className="w-3 h-3 rounded-full bg-primary/90 shadow-[0_0_10px_rgba(0,230,57,0.2)]"></div>
                 <div className="absolute left-1/2 -translate-x-1/2 font-metadata text-metadata text-secondary opacity-50 px-4">
                     {project.slug}.com
                 </div>
              </div>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/10] overflow-hidden group bg-surface-dim">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                    src={!project.image?.startsWith("http") ? `${process.env.NEXT_PUBLIC_API_URL}${project.image}` : project.image} 
                    alt={`Preview of ${project.title}`} 
                    className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                 />
              </div>
           </div>
        </motion.div>

        <motion.div variants={staggerCont} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mt-12 md:mt-16 relative z-10 px-4 md:px-0">
           <div className="lg:col-span-4 flex flex-col gap-4">
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 shadow-sm flex flex-col gap-2 hover:border-primary/50 transition-colors">
                 <h3 className="font-metadata text-metadata text-secondary uppercase tracking-widest flex items-center gap-2 decoration-primary underline-offset-4 mb-2">
                    <span className="material-symbols-outlined text-[18px]">person</span> Role
                 </h3>
                 <p className="font-headline-md text-on-background capitalize">{project.role || "Lead Developer"}</p>
              </motion.div>
              
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 shadow-sm flex flex-col gap-2 hover:border-primary/50 transition-colors">
                 <h3 className="font-metadata text-metadata text-secondary uppercase tracking-widest flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span> Timeline
                 </h3>
                 <p className="font-headline-md text-on-background">{project.timeline}</p>
              </motion.div>

              {(project.categories && project.categories.length > 0) && (
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 shadow-sm flex flex-col gap-4 group">
                 <h3 className="font-metadata text-metadata text-secondary uppercase tracking-widest flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">category</span> Categories
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {project.categories.map((t: string, idx: number) => (
                      <span key={idx} className="bg-primary/20 px-3 py-1.5 rounded-lg text-code-snippet font-code-snippet text-primary border border-primary/30 transition-all cursor-default uppercase">
                         {t}
                      </span>
                   ))}
                 </div>
              </motion.div>
              )}

              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-outline-variant/40 bg-surface-container-lowest/80 shadow-sm flex flex-col gap-4 group">
                 <h3 className="font-metadata text-metadata text-secondary uppercase tracking-widest flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-[18px]">build</span> Tech Stack
                 </h3>
                 <div className="flex flex-wrap gap-2">
                   {((project as any).tech || (project as any).tags || []).map((t: string, idx: number) => (
                      <span key={idx} className="bg-surface-variant/40 px-3 py-1.5 rounded-lg text-code-snippet font-code-snippet text-on-surface-variant border border-outline-variant/20 hover:bg-primary hover:text-on-primary hover:border-primary transition-all cursor-default">
                         {t}
                      </span>
                   ))}
                 </div>
              </motion.div>
           </div>

           <div className="lg:col-span-8 flex flex-col gap-10 lg:pl-8">
              <motion.div variants={fadeUp} className="flex flex-col gap-6 w-full">
                 <h2 className="font-display text-3xl md:text-4xl text-on-background flex items-center gap-4">
                    Overview 
                    <hr className="flex-1 border-t border-outline-variant/40" />
                 </h2>
                 <p className="font-body text-body text-on-surface text-lg leading-relaxed whitespace-pre-line text-justify md:text-left">
                    {project.description || (project as any).details || (project as any).desc}
                 </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-end gap-4 mt-4 pt-8 border-t border-border-subtle w-full">
                 {(project.liveDemo && project.liveDemo !== '#') && (
                    <a target="_blank" rel="noopener noreferrer" href={project.liveDemo} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-on-primary hover:bg-primary/90 hover:scale-[1.03] active:scale-95 uppercase font-metadata text-metadata transition-all gap-2 shadow-lg shadow-primary/20">
                       Live Demo <span className="material-symbols-outlined text-[20px]">play_circle</span>
                    </a>
                 )}
                 {(project.github && project.github !== '#') && (
                    <a target="_blank" rel="noopener noreferrer" href={project.github} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-outline-variant/50 text-on-surface focus:outline-none hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 uppercase font-metadata text-metadata transition-all gap-2">
                       View Code <span className="material-symbols-outlined text-[20px]">code</span>
                    </a>
                 )}
              </motion.div>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
