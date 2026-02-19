import Link from "next/link";
import { MessageCircle, ArrowUp } from "lucide-react";

const HIRE_ME_URL = "https://wa.me/923174072455";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface-700 bg-surface-800/50">
      <div className="section-padding container-wide">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">Sufyan Ajmal</p>
            <p className="mt-1 text-sm text-slate-400">
              Full-Stack Web Developer · Lahore, Pakistan
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            <MessageCircle size={18} />
            Hire Me
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-surface-700 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sufyan Ajmal. All rights reserved.
          </p>
          <Link
            href="#hero"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-primary-400"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
