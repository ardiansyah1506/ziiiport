export function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-lowest py-gutter">
      <div className="max-w-7xl mx-auto px-margin-safe flex flex-col md:flex-row justify-between items-center gap-stack-md">
        <div className="flex items-center gap-stack-sm font-metadata text-metadata text-on-surface-variant uppercase">
          <span className="w-2 h-2 rounded-full bg-[#00ff41]"></span> System Operational // 0x00FF
        </div>
        <div className="font-metadata text-metadata text-on-surface-variant">© 2024 Fauzi Ardiansyah. Engineered in Indonesia.</div>
        <div className="flex gap-stack-md text-on-surface-variant">
          <a href="https://ziii.my.id/cms/login" target="_blank" rel="noopener noreferrer" className="material-symbols-outlined text-[18px] cursor-pointer hover:text-[#00ff41] transition-colors">terminal</a>
          <a href="https://github.com/ardiansyah1506" target="_blank" rel="noopener noreferrer" className="material-symbols-outlined text-[18px] cursor-pointer hover:text-[#00ff41] transition-colors">data_object</a>
        </div>
      </div>
    </footer>
  );
}
