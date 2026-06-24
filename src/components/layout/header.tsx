import Link from "next/link";
import { FlaskConical } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

export function Header() {
  const links = [
    { name: "Manifesto", href: "#manifesto", num: "01" },
    { name: "Laboratório", href: "#laboratorio", num: "02" },
    { name: "Setores", href: "#setores", num: "03" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-borderUI bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <FlaskConical className="w-5 h-5 text-accent" />
          <span className="font-poppins font-bold text-lg tracking-tight">Café Labs</span>
        </Link>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="group flex items-center gap-1 text-sm font-inter text-foreground/80 hover:text-accent transition-colors"
            >
              <span className="font-fira text-xs text-foreground/40 group-hover:text-accent/60 transition-colors">
                [{link.num}]
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="#contato"
            className="hidden md:flex bg-foreground text-background font-poppins text-sm font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Tomar um Café
          </Link>
        </div>

      </div>
    </header>
  );
}