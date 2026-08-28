import { ThemeToggle } from "./ThemeToggle";
import { Navigation } from "./Navigation";
import Preloader from "./Preloader";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 dark:bg-[#121415]/80 backdrop-blur-md border-b border-outline-variant">
      <Preloader />
      <div className="h-16 max-w-7xl mx-auto px-margin-safe flex items-center justify-between">
        <div className="flex items-center gap-unit">
          <span className="font-metadata text-metadata text-[#00ff41]">[STUDIO-v1.0]</span>
          <span className="font-headline-md text-headline-md tracking-tight text-on-surface">Fauzi Ardiansyah</span>
        </div>
        <Navigation />
        <div className="flex items-center gap-stack-md">
          <ThemeToggle />
          <div className="w-8 h-8 rounded-full bg-[#00ff41] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#121415] text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
