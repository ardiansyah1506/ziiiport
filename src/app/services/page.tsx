"use client";

import { motion } from "framer-motion";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerCont = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex flex-col w-full relative pb-section-gap">
      {/* Grid Overlay System */}
      <div className="fixed inset-0 pointer-events-none z-[-1] max-w-7xl mx-auto border-l border-r border-outline-variant/30 px-margin-safe">
        <div className="h-full w-full flex justify-between">
          <div className="w-px h-full bg-outline-variant/30"></div>
          <div className="w-px h-full bg-outline-variant/30"></div>
          <div className="w-px h-full bg-outline-variant/30"></div>
          <div className="w-px h-full bg-outline-variant/30"></div>
        </div>
      </div>
      
      {/* Header Section */}
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-7xl mx-auto px-margin-safe w-full pt-gutter pb-section-gap relative">
        <div className="w-full border-b border-outline-variant mb-gutter">
          <span className="font-metadata text-metadata text-[#00ff41] block mb-unit uppercase tracking-wider">[SYS_OP: CAPABILITIES_MANIFEST]</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-8 flex flex-col gap-stack-md">
            <h1 className="font-display text-display text-on-background m-0">Technical<br /><span className="text-on-surface-variant italic">Capabilities</span></h1>
            <p className="font-body text-body text-on-surface max-w-2xl">
              High-fidelity software engineering services focused on robust architecture, scalable infrastructure, and precise technical execution.
            </p>
          </div>
        </div>
      </motion.div>
      
      {/* Capabilities Grid */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerCont} className="max-w-7xl mx-auto px-margin-safe w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative">
          
          {/* Item 01 */}
          <motion.div variants={fadeUp} className="group border border-outline-variant bg-surface p-gutter hover:border-[#00ff41] transition-colors duration-200 relative overflow-hidden flex flex-col gap-stack-md">
            <div className="flex justify-between items-start border-b border-outline-variant/50 pb-stack-sm">
              <span className="font-metadata text-metadata text-on-surface-variant group-hover:text-[#00ff41] transition-colors">01 // FRONTEND_DEVELOPMENT</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#00ff41] transition-colors">web</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Frontend Development</h3>
              <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">End-to-end development of high-performance web applications. Utilizing modern frameworks to build responsive, accessible, and fast interfaces with a focus on user experience.</p>
              <div className="flex flex-wrap gap-unit">
                {["FRONTEND", "NEXT.JS", "REACT", "HTML", "TAILWINDCSS"].map(tag => (
                  <span key={tag} className="border border-outline-variant px-unit py-[2px] font-metadata text-[10px] text-on-surface uppercase">[{tag}]</span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Item 02: Backend */}
          <motion.div variants={fadeUp} className="group border border-outline-variant bg-surface p-gutter hover:border-[#00ff41] transition-colors duration-200 relative overflow-hidden flex flex-col gap-stack-md">
            <div className="flex justify-between items-start border-b border-outline-variant/50 pb-stack-sm">
              <span className="font-metadata text-metadata text-on-surface-variant group-hover:text-[#00ff41] transition-colors">02 // BACKEND_DEVELOPMENT</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#00ff41] transition-colors">api</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Backend Development</h3>
              <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">Designing scalable microservices and robust server-side architectures using Node.js, Laravel, and Express. Expert implementation of PHP and JavaScript for high-performance data processing and secure API endpoints.</p>
              <div className="flex flex-wrap gap-unit">
                {["BACKEND", "NODE.JS", "LARAVEL", "EXPRESS"].map(tag => (
                  <span key={tag} className="border border-outline-variant px-unit py-[2px] font-metadata text-[10px] text-on-surface uppercase">[{tag}]</span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Item 03: DevOps */}
          <motion.div variants={fadeUp} className="group border border-outline-variant bg-surface p-gutter hover:border-[#00ff41] transition-colors duration-200 relative overflow-hidden flex flex-col gap-stack-md">
            <div className="flex justify-between items-start border-b border-outline-variant/50 pb-stack-sm">
              <span className="font-metadata text-metadata text-on-surface-variant group-hover:text-[#00ff41] transition-colors">03 // INFRASTRUCTURE_&amp;_DEVOPS</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#00ff41] transition-colors">settings_input_component</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Infrastructure &amp; DevOps</h3>
              <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">Specializing in direct server deployments and web server optimization. Experienced in managing environments across VPS and cPanel, focusing on reliable Nginx configurations and efficient GitHub-based deployment workflows.</p>
              <div className="flex flex-wrap gap-unit">
                {["DEVOPS", "VPS", "CPANEL", "NGINX", "GITHUB"].map(tag => (
                  <span key={tag} className="border border-outline-variant px-unit py-[2px] font-metadata text-[10px] text-on-surface uppercase">[{tag}]</span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Item 04: AI */}
          <motion.div variants={fadeUp} className="group border border-outline-variant bg-surface p-gutter hover:border-[#00ff41] transition-colors duration-200 relative overflow-hidden flex flex-col gap-stack-md">
            <div className="flex justify-between items-start border-b border-outline-variant/50 pb-stack-sm">
              <span className="font-metadata text-metadata text-on-surface-variant group-hover:text-[#00ff41] transition-colors">04 // AI_WORKFLOW_AUTOMATION</span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#00ff41] transition-colors">smart_toy</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">AI Workflow Automation</h3>
              <p className="font-body text-body text-on-surface-variant mb-stack-md line-clamp-3">Building intelligent automation systems including Telegram bots, automated email workflows, and advanced AI integrations using embeddings and RAG pipelines.</p>
              <div className="flex flex-wrap gap-unit">
                {["TELEGRAM_BOT", "RAG", "EMBEDDINGS"].map(tag => (
                  <span key={tag} className="border border-outline-variant px-unit py-[2px] font-metadata text-[10px] text-on-surface uppercase">[{tag}]</span>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </motion.div>
    </div>
  );
}
