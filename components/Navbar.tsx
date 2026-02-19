"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const HIRE_ME_URL = "https://wa.me/923174072455";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-700/50 bg-surface-900/90 backdrop-blur-md">
      <nav className="container-wide flex h-12 items-center justify-between px-6 py-0 sm:px-8 md:h-14 md:px-12 md:py-0 lg:px-20">
        <Link
          href="#hero"
          className="text-xl font-semibold text-white transition-colors hover:text-primary-400"
        >
          Sufyan Ajmal
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-primary-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-3.5 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-1.5 text-slate-300 hover:bg-surface-700 hover:text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface-700/50 bg-surface-900/95 px-6 py-3 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-slate-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={HIRE_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary-500 px-3.5 py-2 text-sm font-semibold text-white hover:bg-primary-600"
                onClick={() => setOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
