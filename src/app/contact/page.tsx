"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [time, setTime] = useState("");
  const [btnText, setBtnText] = useState("[ INITIATE_TRANSMISSION ]");
  const [btnClasses, setBtnClasses] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // GMT+7 is UTC+7
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const gmt7 = new Date(utc + (3600000 * 7));
      
      const hours = String(gmt7.getHours()).padStart(2, '0');
      const minutes = String(gmt7.getMinutes()).padStart(2, '0');
      const seconds = String(gmt7.getSeconds()).padStart(2, '0');
      
      setTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnText("[ MESSAGE_DISPATCHED ]");
    setBtnClasses("bg-[#00ff41] text-[#121415] border-[#00ff41]");
    setTimeout(() => {
      e.currentTarget.reset();
      setBtnText("[ INITIATE_TRANSMISSION ]");
      setBtnClasses("");
    }, 3000);
  };

  return (
    <div className="flex flex-col w-full relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto w-full px-margin-safe py-section-gap relative z-10 flex flex-col md:flex-row gap-gutter items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 flex flex-col gap-stack-md sticky top-32"
        >
          <div className="font-metadata text-metadata text-[#00ff41] uppercase tracking-widest flex items-center gap-unit">
            <span className="w-1 h-1 bg-[#00ff41] animate-pulse"></span>
            INIT_CONNECTION
          </div>
          <h1 className="font-display text-display text-on-surface">
            Have a system to build?
          </h1>
          <p className="font-body text-body text-on-surface-variant max-w-sm mt-stack-md">
            Architecture, engineering, and execution. If you need a robust digital product, reach out. Operational in GMT+7.
          </p>
          <div className="mt-section-gap flex flex-col gap-stack-sm border-l border-outline-variant pl-stack-sm">
            <div className="font-metadata text-metadata text-on-surface-variant uppercase">Local Node</div>
            <div className="font-headline-md text-headline-md text-on-surface">Jakarta, ID</div>
            <div className="font-code-snippet text-code-snippet text-[#00ff41] flex items-center gap-unit mt-unit">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              <span id="local-time">{time}</span> GMT+7
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12 flex flex-col gap-gutter border border-outline-variant bg-surface p-gutter"
        >
          <div className="flex justify-between items-center pb-stack-md border-b border-outline-variant">
            <span className="font-metadata text-metadata text-on-surface-variant uppercase">Message Protocol</span>
            <span className="font-metadata text-metadata text-on-surface-variant">[01/01]</span>
          </div>
          <form className="flex flex-col gap-gutter" id="contact-form" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-gutter">
              <div className="w-full flex flex-col gap-stack-sm group">
                <label className="font-metadata text-metadata text-on-surface-variant uppercase group-focus-within:text-[#00ff41] transition-colors">Identification [Name]</label>
                <input className="w-full bg-transparent border-b border-outline-variant py-stack-sm font-code-snippet text-code-snippet text-on-surface focus:outline-none focus:border-[#00ff41] transition-colors placeholder:text-on-surface-variant/50" placeholder="John Doe" required type="text" />
              </div>
              <div className="w-full flex flex-col gap-stack-sm group">
                <label className="font-metadata text-metadata text-on-surface-variant uppercase group-focus-within:text-[#00ff41] transition-colors">Return Address [Email]</label>
                <input className="w-full bg-transparent border-b border-outline-variant py-stack-sm font-code-snippet text-code-snippet text-on-surface focus:outline-none focus:border-[#00ff41] transition-colors placeholder:text-on-surface-variant/50" placeholder="john@domain.tld" required type="email" />
              </div>
            </div>
            
            <div className="w-full flex flex-col gap-stack-sm group">
              <label className="font-metadata text-metadata text-on-surface-variant uppercase group-focus-within:text-[#00ff41] transition-colors">Payload [Message]</label>
              <textarea className="w-full bg-transparent border-b border-outline-variant py-stack-sm font-code-snippet text-code-snippet text-on-surface focus:outline-none focus:border-[#00ff41] transition-colors placeholder:text-on-surface-variant/50 resize-none" placeholder="Describe the system requirements..." required rows={4}></textarea>
            </div>
            
            <div className="flex justify-between items-end mt-stack-md">
              <div className="font-metadata text-metadata text-on-surface-variant hidden md:block">
                <span className="text-[#00ff41]">*</span> Encrypted channel not required. Standard SSL active.
              </div>
              <button className={`border border-outline-variant hover:border-[#00ff41] text-on-surface hover:text-[#00ff41] bg-transparent font-code-snippet text-code-snippet py-stack-sm px-gutter uppercase transition-all duration-200 ${btnClasses}`} type="submit">
                {btnText}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto w-full px-margin-safe pb-section-gap relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit">
          {[
            { id: 1, label: "Email", icon: "mail", text: "hello@fauzi.dev" },
            { id: 2, label: "GitHub", icon: "code", text: "github.com/fauzi-a" },
            { id: 3, label: "LinkedIn", icon: "work", text: "linkedin.com/in/fauzi" }
          ].map(it => (
            <motion.a key={it.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="group border border-outline-variant bg-surface p-stack-md flex flex-col justify-between h-32 hover:border-[#00ff41] transition-colors" href="#">
              <div className="flex justify-between items-start">
                <span className="font-metadata text-metadata text-on-surface-variant uppercase group-hover:text-[#00ff41] transition-colors">{it.label}</span>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#00ff41] text-[18px] transition-colors">{it.icon}</span>
              </div>
              <span className="font-code-snippet text-code-snippet text-on-surface">{it.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none z-0 mix-blend-screen overflow-hidden">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
              <path className="text-[#00ff41]" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" height="100%" width="100%"></rect>
        </svg>
      </div>
    </div>
  );
}
