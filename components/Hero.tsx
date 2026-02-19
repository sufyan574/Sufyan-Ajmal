import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HIRE_ME_URL = "https://wa.me/923174072455";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 sm:pt-32 md:pt-36 hero-gradient"
    >
      <div className="section-padding container-wide flex flex-col items-center text-center">
        <div className="w-full max-w-6xl mx-auto px-6 mb-12 md:mb-16">
          <Image
            src="/tech-stack-banner.jpg"
            alt="Tech Stack - PHP Laravel React Next.js AI Solutions"
            width={1400}
            height={450}
            className="w-full h-auto max-h-[280px] md:max-h-[350px] lg:max-h-[420px] rounded-3xl shadow-2xl shadow-emerald-900/20 object-cover mx-auto"
            sizes="(max-width: 768px) 100vw, 80vw"
            priority
          />
        </div>
        <p
          className="mb-4 text-sm font-medium uppercase tracking-wider text-primary-400"
          style={{ animation: "fadeIn 0.6s ease-out" }}
        >
          Full-Stack Web Developer
        </p>
        <h1
          className="mb-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ animation: "slideUp 0.6s ease-out 0.1s both" }}
        >
          PHP, Laravel, React, Next.js & AI Solutions
        </h1>
        <p
          className="mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl"
          style={{ animation: "slideUp 0.6s ease-out 0.2s both" }}
        >
          Based in Lahore, Pakistan — Building fast, scalable and modern web
          applications.
        </p>
        <div
          className="flex flex-col gap-4 sm:flex-row sm:gap-6"
          style={{ animation: "slideUp 0.6s ease-out 0.3s both" }}
        >
          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-500 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            Hire Me on WhatsApp
            <ArrowRight size={18} className="shrink-0" />
          </a>
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-600 bg-surface-800/50 px-6 py-3.5 text-base font-semibold text-slate-200 transition-all hover:border-primary-500/50 hover:bg-surface-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            View My Work
            <ArrowRight size={18} className="shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}
