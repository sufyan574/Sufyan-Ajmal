"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "WhatsApp Groups Directory",
    category: "Directory / Community Platform",
    liveUrl: "https://watsappgroups.online/",
    githubUrl: null,
    image: "/projects/project1.jpg",
  },
  {
    title: "All Calculators Shop",
    category: "E-commerce",
    liveUrl: "https://allcalculators.shop/",
    githubUrl: null,
    image: "/projects/project2.jpg",
  },
  {
    title: "Manchester's Calculators",
    category: "Online Tools / Calculators",
    liveUrl: "https://manchesters.site/",
    githubUrl: null,
    image: "/projects/project3.jpg",
  },
  {
    title: "Our Network Text Tools",
    category: "Utility / Text Tools",
    liveUrl: "https://ournetwork.online/",
    githubUrl: null,
    image: "/projects/project4.jpg",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI Tool",
    liveUrl: null,
    githubUrl: "https://github.com/sufyan574/Ai-Resume-Analyzer",
    image: "/projects/project5.jpg",
  },
  {
    title: "MERN Stack Complete Project",
    category: "Full-Stack Demo",
    liveUrl: null,
    githubUrl: "https://github.com/sufyan574/MERN-STACK-PROJECT-COMPLETEION",
    image: "/projects/project6.jpg",
  },
];

const categories = [
  "All",
  "Directory / Community Platform",
  "E-commerce",
  "Online Tools / Calculators",
  "Utility / Text Tools",
  "AI Tool",
  "Full-Stack Demo",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-20 section-padding bg-surface-800/30 md:scroll-mt-24">
      <div className="container-wide">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Projects
        </h2>
        <p className="mb-8 max-w-2xl text-slate-400">
          A selection of projects I&apos;ve built — live sites and open-source
          repos.
        </p>

        {/* Filter buttons */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={
                activeFilter === cat
                  ? "rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition-all"
                  : "rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <p className="rounded-2xl border border-surface-600 bg-surface-800/50 py-16 text-center text-slate-400">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className="card-hover group overflow-hidden rounded-2xl border border-surface-600 bg-surface-800/50 shadow-lg"
              >
                <a
                  href={project.liveUrl ?? project.githubUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-surface-700">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute right-3 top-3 rounded-full border border-emerald-500/30 bg-emerald-500/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500/30 group-hover:text-emerald-300">
                      {project.category}
                    </span>
                  </div>
                </a>
                <div className="p-5">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary-500/20 px-3 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-500/30"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-surface-700 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-surface-600 hover:text-white"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
