import { FileText, FolderKanban, Home, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderKanban },
  { name: "Resume", href: "#resume", icon: FileText },
];

const NavLinks = () => (
  <>
    {navLinks.map(({ name, href, icon: Icon }) => (
      <a
        key={name}
        href={href}
        aria-label={name}
        className="group flex h-9 items-center rounded-full text-gray-400 transition-colors duration-300 hover:bg-white/10 hover:text-white"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center">
          <Icon size={16} strokeWidth={2} />
        </span>
        <span className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-300 ease-out group-hover:grid-cols-[1fr]">
          <span className="overflow-hidden whitespace-nowrap text-xs font-medium uppercase tracking-widest">
            <span className="inline-block pr-4">{name}</span>
          </span>
        </span>
      </a>
    ))}
  </>
);

export default NavLinks;
