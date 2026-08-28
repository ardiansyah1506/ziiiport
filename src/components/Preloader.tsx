"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("[SYSTEM_INITIALIZING_]");

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("site_loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const t1 = setTimeout(() => setText("[LOADING_MODULES]..."), 600);
    const t2 = setTimeout(() => setText("[ESTABLISHING_CONNECTION]..."), 1200);
    const t3 = setTimeout(() => setText("[READY]"), 2000);
    
    const tFinal = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("site_loaded", "true");
    }, 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(tFinal);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          key="preloader"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#121415] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center gap-stack-md">
            <span className="font-metadata text-metadata text-[#00ff41] uppercase tracking-widest">{text}</span>
            <div className="w-64 h-[2px] bg-outline-variant overflow-hidden mt-stack-sm relative">
                <motion.div 
                   initial={{ x: "-100%" }}
                   animate={{ x: "0%" }}
                   transition={{ duration: 2.2, ease: "easeInOut" }}
                   className="w-full h-full bg-[#00ff41] absolute top-0 left-0"
                ></motion.div>
            </div>
          </div>
          
          <div className="absolute bottom-margin-safe font-code-snippet text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
            FAUZI_ARDIANSYAH // 2026_ARCHIVE
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
