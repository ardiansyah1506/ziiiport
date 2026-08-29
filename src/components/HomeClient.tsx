"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerCont = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

export default function HomeClient({ initialProjects }: { initialProjects: any[] }) {
  const featuredProjects = initialProjects.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerCont}
        className="w-full min-h-[819px] flex flex-col justify-center px-margin-safe max-w-7xl mx-auto py-section-gap relative"
      >
        <div className="flex flex-col gap-stack-md z-10">
          <motion.div variants={fadeUp} className="flex items-center gap-stack-sm mb-gutter">
            <span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></span>
            <span className="font-metadata text-metadata text-[#00ff41] uppercase tracking-widest">[STATUS_ONLINE] // Open for Projects</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-display text-on-background max-w-4xl tracking-tighter">
            Fauzi Ardiansyah.<br />
            <span className="text-on-surface-variant">Full Stack Developer.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body text-headline-md text-on-surface max-w-2xl mt-stack-md border-l border-[#00ff41] pl-stack-md">
            Building scalable web applications, SaaS platforms, robust backend systems, and AI-driven automation. Engineered for performance and scale.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-stack-md mt-margin-safe">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center bg-[#00ff41] text-[#121415] font-metadata text-metadata uppercase px-8 py-4 rounded-none hover:bg-[#00e639] transition-colors gap-stack-sm border border-transparent"
            >
              View Projects
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center bg-transparent text-on-surface font-metadata text-metadata uppercase px-8 py-4 rounded-none border border-outline hover:border-[#00ff41] hover:text-[#00ff41] transition-all"
            >
              About Me
            </Link>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.div variants={fadeUp} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 z-0">
          <span className="font-metadata text-metadata text-on-surface-variant uppercase tracking-widest text-[10px]">Scroll to discover</span>
          <div className="w-px h-16 bg-outline-variant animate-pulse"></div>
        </motion.div>
      </motion.section>

      <div className="w-full border-t border-outline-variant"></div>

      {/* WEAPONS OF CHOICE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerCont}
        className="w-full px-margin-safe max-w-7xl mx-auto py-section-gap"
      >
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-margin-safe pb-stack-md border-b border-outline-variant">
          <div>
            <span className="font-metadata text-metadata text-[#00ff41] uppercase mb-unit block">[TECH_ARSENAL]</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Weapons of Choice</h2>
          </div>
          <p className="font-body text-body text-on-surface-variant max-w-sm md:text-right mt-stack-md md:mt-0">
            A curated stack for building high-performance, scalable, and maintainable digital ecosystems.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter">
          {[
            { icon: "php", name: "Laravel & PHP" },
            { icon: "javascript", name: "React & Next.js" },
            { icon: "data_object", name: "Node.js" },
            { icon: "smartphone", name: "Flutter" },
            { icon: "memory", name: "n8n & AI", extraClasses: "col-span-2 md:col-span-1" }
          ].map((tech) => (
            <motion.div variants={scaleUp} key={tech.name} className={`border border-outline-variant bg-surface-container-lowest p-margin-safe hover:border-[#00ff41] transition-colors group flex flex-col items-center justify-center gap-stack-md aspect-square ${tech.extraClasses || ""}`}>
              <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center group-hover:border-[#00ff41] transition-colors">
                <span className="material-symbols-outlined text-[32px] text-on-surface-variant group-hover:text-[#00ff41] transition-colors">{tech.icon}</span>
              </div>
              <span className="font-metadata text-metadata text-on-surface uppercase text-center">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="w-full border-t border-outline-variant"></div>

      {/* FEATURED PROJECTS SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerCont}
        className="w-full px-margin-safe max-w-7xl mx-auto py-section-gap"
      >
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-margin-safe pb-stack-md border-b border-outline-variant">
          <div>
            <span className="font-metadata text-metadata text-[#00ff41] uppercase mb-unit block">[0X_PROJECTS]</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Works</h2>
          </div>
          <Link href="/projects" className="font-metadata text-metadata text-on-surface-variant hover:text-[#00ff41] transition-colors flex items-center gap-unit uppercase mt-stack-md md:mt-0">
            View Full Archive <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
          <div className="absolute inset-0 pointer-events-none hidden md:flex justify-between w-full h-full opacity-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-px h-full bg-on-background"></div>
            ))}
          </div>

          {featuredProjects.map((project, idx) => {
            const tags = ((project as any).tech || (project as any).tags || (project as any).categories || []).slice(0, 3);
            const imageUrl = project.image ? (project.image.startsWith("http") ? project.image : (process.env.NEXT_PUBLIC_API_URL + project.image)) : "https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg";
            
            if (idx === 0) {
              return (
                <motion.article key={project.slug} variants={fadeUp} className="col-span-1 md:col-span-12 group relative border border-outline-variant bg-surface-container-lowest hover:border-[#00ff41] transition-colors">
                  <div className="flex flex-col md:flex-row min-h-[400px]">
                    <div className="w-full md:w-7/12 relative overflow-hidden border-b md:border-b-0 md:border-r border-outline-variant p-unit">
                      <div className="w-full h-full min-h-[300px] bg-surface-container relative">
                        <img 
                          alt={project.title} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                          src={imageUrl} 
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-5/12 p-margin-safe flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-stack-sm mb-stack-md">
                          {tags.map((tag: string) => (
                            <span key={tag} className="font-metadata text-metadata text-on-surface-variant border border-outline-variant px-2 py-1 uppercase">[{tag}]</span>
                          ))}
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-[#00ff41] transition-colors">{project.title}</h3>
                        <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">
                          {project.description || project.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-end border-t border-outline-variant pt-stack-md mt-stack-md">
                        <span className="font-metadata text-metadata text-on-surface-variant">
                          TIMESTAMP: {project.year || new Date(project.created_at || Date.now()).getFullYear() || "2024"}
                        </span>
                        <Link href={`/projects/${project.slug}`} className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-[#00ff41] hover:text-[#121415] hover:border-[#00ff41] transition-all">
                          <span className="material-symbols-outlined">arrow_outward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            }
            return (
              <motion.article key={project.slug} variants={fadeUp} className="col-span-1 md:col-span-6 group relative border border-outline-variant bg-surface-container-lowest hover:border-[#00ff41] transition-colors flex flex-col">
                <div className="w-full relative overflow-hidden border-b border-outline-variant p-unit aspect-video">
                  <div className="w-full h-full bg-surface-container relative">
                    <img 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                      src={imageUrl} 
                    />
                  </div>
                </div>
                <div className="p-margin-safe flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex flex-wrap gap-stack-sm mb-stack-md">
                      {tags.map((tag: string) => (
                        <span key={tag} className="font-metadata text-metadata text-on-surface-variant border border-outline-variant px-2 py-1 uppercase">[{tag}]</span>
                      ))}
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm group-hover:text-[#00ff41] transition-colors">{project.title}</h3>
                    <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">
                      {project.description || project.desc}
                    </p>
                  </div>
                  <div className="flex justify-between items-end border-t border-outline-variant pt-stack-md mt-stack-md">
                    <span className="font-metadata text-metadata text-on-surface-variant">
                      TIMESTAMP: {project.year || new Date(project.created_at || Date.now()).getFullYear() || "2024"}
                    </span>
                    <Link href={`/projects/${project.slug}`} className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-[#00ff41] hover:text-[#121415] hover:border-[#00ff41] transition-all">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}

        </div>
      </motion.section>

      <div className="w-full border-t border-outline-variant"></div>

      {/* EXPERTISE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
        className="w-full px-margin-safe max-w-7xl mx-auto py-section-gap"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter border border-outline-variant bg-surface-container-lowest p-margin-safe relative overflow-hidden group hover:border-[#00ff41] transition-colors duration-500">
          <div className="absolute -bottom-10 -right-10 w-64 h-64 text-outline-variant opacity-20 pointer-events-none transition-transform duration-700 group-hover:scale-110">
            <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" strokeDasharray="2 4"></circle>
              <circle cx="50" cy="50" r="30" strokeDasharray="1 2"></circle>
              <path d="M50 10 L50 90 M10 50 L90 50"></path>
              <path d="M20 20 L80 80 M20 80 L80 20"></path>
            </svg>
          </div>
          
          <div className="col-span-1 md:col-span-1 relative z-10">
            <span className="font-metadata text-metadata text-[#00ff41] uppercase block mb-stack-md">[CORE_COMPETENCIES]</span>
            <p className="font-body text-body text-on-surface-variant">Systematic approach to software engineering, focusing on maintainability and modular architecture.</p>
          </div>
          
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-gutter relative z-10">
            {[{
              title: "Frontend Architecture",
              skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
            }, {
              title: "Backend & Cloud",
              skills: ["Node.js / Express", "Go (Golang)", "n8n", "Docker"]
            }, {
              title: "Database",
              skills: ["MySQL", "PostgreSQL", "Redis", "Qdrant"]
            }].map((col) => (
              <div key={col.title} className="flex flex-col gap-stack-sm border-l border-outline-variant pl-stack-md transition-colors group-hover:border-[#00ff41]/50">
                <div className="font-metadata text-metadata text-on-surface uppercase mb-unit">{col.title}</div>
                {col.skills.map(s => (
                  <div key={s} className="font-metadata text-metadata text-on-surface-variant border border-outline-variant px-2 py-1 inline-block w-fit bg-background">{s}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="w-full border-t border-outline-variant"></div>

      {/* CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
        className="w-full px-margin-safe max-w-7xl mx-auto py-section-gap"
      >
        <div className="border border-[#00ff41] bg-[#00ff41]/5 p-margin-safe md:p-16 flex flex-col md:flex-row items-center justify-between gap-stack-md relative overflow-hidden group hover:bg-[#00ff41]/10 transition-colors duration-500">
          <div className="absolute -right-20 -top-20 text-[#00ff41] opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
            <span className="material-symbols-outlined text-[300px]">terminal</span>
          </div>
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="font-metadata text-metadata text-[#00ff41] uppercase block mb-stack-sm">[INITIATE_SEQUENCE]</span>
            <h2 className="font-display text-[48px] md:text-[64px] leading-none text-on-surface tracking-tighter mb-stack-md">Ready to build something extraordinary?</h2>
            <p className="font-body text-headline-md text-on-surface-variant max-w-xl">
              Currently accepting new projects for Q3. Let&apos;s discuss your technical requirements and architect a robust solution.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0 w-full md:w-[350px] flex flex-col gap-4 mt-stack-md md:mt-0">
            <a 
              href="mailto:ardiansyah1506@gmail.com" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-on-surface hover:text-[#00ff41] border border-outline-variant hover:border-[#00ff41] bg-surface-container-lowest px-6 py-4 uppercase font-metadata text-metadata transition-all group"
            >
              <div className="flex items-center gap-3 group-hover:text-[#121415]">
                 <span className="material-symbols-outlined text-[20px]">mail</span>
                 Email Me
              </div>
              <span className="material-symbols-outlined text-[16px] group-hover:text-[#121415]">arrow_outward</span>
            </a>
            
            <a 
              href="https://github.com/ardiansyah1506" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-on-surface hover:text-[#00ff41] border border-outline-variant hover:border-[#00ff41] bg-surface-container-lowest px-6 py-4 uppercase font-metadata text-metadata transition-all"
            >
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-[20px]">code</span>
                 GitHub
              </div>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>

            <a 
              href="https://linkedin.com/in/fauziardiansyah" 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-between text-on-surface hover:text-[#00ff41] border border-outline-variant hover:border-[#00ff41] bg-surface-container-lowest px-6 py-4 uppercase font-metadata text-metadata transition-all"
            >
              <div className="flex items-center gap-3">
                 <span className="material-symbols-outlined text-[20px]">work</span>
                 LinkedIn
              </div>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
