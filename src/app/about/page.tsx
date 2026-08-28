"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerCont = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const expandLine = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1 } }
  };

  const experiences = [
    { 
      role: "Senior Software Engineer", 
      company: "TechNova Corp", 
      year: "2023 - Present", 
      desc: "Spearheaded the frontend architecture for high-traffic enterprise SaaS solutions. Implemented CI/CD pipelines and micro-frontends.",
      id: "EXP_01"
    },
    { 
      role: "Fullstack Developer", 
      company: "Creative Systems Studio", 
      year: "2021 - 2023", 
      desc: "Designed intuitive dashboards for internal tooling and orchestrated backend microservices using Node.js & Laravel.",
      id: "EXP_02"
    },
    { 
      role: "Independent Web Developer", 
      company: "Freelance Client Base", 
      year: "2019 - 2021", 
      desc: "Developed highly dynamic web experiences integrating headless CMS platforms. Focused intently on UI/UX and Core Web Vitals optimization.",
      id: "EXP_03"
    }
  ];

  return (
    <section className="w-full relative overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg fill="none" height="100%" stroke="currentColor" width="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern height="40" id="smallGrid" patternUnits="userSpaceOnUse" width="40">
            <path d="M 40 0 L 0 0 0 40" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect fill="url(#smallGrid)" height="100%" width="100%" />
        </svg>
      </div>

      <motion.div 
        initial="hidden" animate="visible" variants={staggerCont}
        className="max-w-7xl mx-auto px-margin-safe pt-section-gap pb-gutter relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-12 mb-stack-md">
            <div className="inline-flex items-center gap-stack-sm mb-stack-md border border-[#00ff41]/50 bg-[#00ff41]/5 p-unit px-stack-sm">
              <span className="w-2 h-2 bg-[#00ff41] animate-pulse"></span>
              <span className="font-metadata text-metadata text-[#00ff41] uppercase">03/ SYSTEM_AUTHOR</span>
            </div>
            <h1 className="font-display text-display text-on-background tracking-tighter">
              BEYOND WRITING CODE.<br />
              <span className="text-on-surface-variant italic">ARCHITECTING REALITIES.</span>
            </h1>
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-5 border-t border-outline-variant pt-gutter mt-stack-md">
            <p className="font-metadata text-metadata text-on-surface-variant uppercase mb-stack-sm">[PERSONAL_IDENTITY]</p>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-stack-md">Fauzi Ardiansyah</h2>
            <div className="flex flex-col gap-stack-md font-body text-body text-on-surface-variant max-w-sm">
              <p>
                I am a developer focused on engineering real products and resilient systems. I don&apos;t just write code; I architect solutions that scale, solve actual problems, and deliver tangible value.
              </p>
              <p>
                My approach bridges the gap between high-level vision and low-level execution. Constantly exploring the edge cases of performance optimization, visual aesthetics, and database structures.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-unit mt-stack-md">
              <div className="border border-outline-variant p-stack-sm bg-surface-container-lowest">
                <span className="font-metadata text-metadata text-on-surface uppercase block mb-1">Status</span>
                <span className="font-metadata text-[10px] text-[#00ff41] uppercase tracking-wider block">Operational</span>
              </div>
              <div className="border border-outline-variant p-stack-sm bg-surface-container-lowest">
                <span className="font-metadata text-metadata text-on-surface uppercase block mb-1">Location</span>
                <span className="font-metadata text-[10px] text-on-surface-variant uppercase tracking-wider block">ID_JKT // UTC+7</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-7 md:pl-gutter mt-stack-md md:border-l border-outline-variant pt-gutter md:pt-0">
            <div className="w-full relative overflow-hidden border border-outline-variant group">
              <div className="aspect-[4/3] bg-surface-container relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-1000 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB03dCyu3pdaw5iVjro4Ug44OwXg34XDg4iUjSnE6sT7EvH0EF0Cow5t76RU7LxuopO4LwI46qkxy6f817rRkd_v8R_MJ1uALIjqCnuywG67lXugBpj-8vMopCrJKiD6Mvc6zRf0URvXjDSWUb_0W-zuYUC-y9raXuCt8gd8mbLltdZq9zEKbbibaykysxm34uHeGkNUcAXJNvmU1iEvYm_AYB2LHtZHuaoqp3PuLmnqXpjz5RuU49qrg')" }}
                ></div>
              </div>
              
              <div className="absolute top-0 right-0 p-unit bg-background/80 backdrop-blur-sm border-b border-l border-outline-variant hidden md:block">
                <div className="font-code-snippet text-code-snippet text-on-surface-variant flex flex-col items-end gap-1">
                  <span>LAT: -6.200000</span>
                  <span>LONG: 106.816666</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Trajectory / Experience Section */}
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerCont}
        className="max-w-7xl mx-auto px-margin-safe py-section-gap relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-gutter pb-stack-sm">
          <div>
            <span className="font-metadata text-metadata text-[#00ff41] uppercase mb-unit block">[PROFESSIONAL_TRAJECTORY]</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Experience Log</h2>
          </div>
        </div>
        
        <div className="flex flex-col border-t border-outline-variant">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={fadeUp} className="group flex flex-col md:flex-row relative border-b border-outline-variant hover:bg-surface-container-lowest transition-colors">
              <div className="w-full md:w-1/4 p-stack-md border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-center">
                <span className="font-metadata text-metadata text-[#00ff41] tracking-wider uppercase mb-stack-sm block group-hover:pl-stack-sm transition-all">{exp.year}</span>
                <span className="font-metadata flexitems-center gap-1 text-[10px] text-on-surface uppercase border border-outline-variant px-unit py-1 w-fit">{exp.id}</span>
              </div>
              <div className="w-full md:w-3/4 p-stack-md flex flex-col justify-center gap-stack-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-[#00ff41] transition-colors">{exp.role}</h3>
                <span className="font-metadata text-metadata text-on-surface-variant uppercase">{exp.company}</span>
                <p className="font-body text-body text-on-surface-variant max-w-2xl mt-unit">
                  {exp.desc}
                </p>
              </div>
              {/* Hover Animated Line */}
              <motion.div variants={expandLine} className="absolute bottom-[-1px] left-0 h-[1px] bg-[#00ff41] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Stat Bar */}
      <div className="w-full border-t border-b border-outline-variant bg-[#00ff41] text-[#121415] py-stack-md overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex gap-16 font-display text-4xl tracking-tighter uppercase"
        >
           <span>Continuous Integration.</span>
           <span>Relentless Execution.</span>
           <span>Data-Driven Design.</span>
           <span>Continuous Integration.</span>
           <span>Relentless Execution.</span>
           <span>Data-Driven Design.</span>
        </motion.div>
      </div>

    </section>
  );
}
