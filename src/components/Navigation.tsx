"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: "/", label: "Home", num: "01/" },
    { href: "/projects", label: "Projects", num: "02/" },
    { href: "/about", label: "About", num: "03/" },
    { href: "/services", label: "Services", num: "04/" },
    { href: "/contact", label: "Contact", num: "05/" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-gutter">
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        
        return (
          <Link 
            key={link.href}
            href={link.href} 
            className={`font-metadata transition-colors flex items-center gap-unit uppercase ${
              isActive 
                ? "text-[#00ff41] border-b border-[#00ff41] text-[16px] font-medium" 
                : "text-metadata text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <span className="opacity-50">{link.num}</span> {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
