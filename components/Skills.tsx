import {
  Code2,
  Server,
  Database,
  Wrench,
  Bot,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "PHP",
      "Laravel",
      "Node.js",
      "Python",
      "REST API Integration",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB", "SQL Server"],
  },
  {
    title: "Automation & Scripting",
    icon: Bot,
    items: [
      "Python",
      "Automation Scripts",
      "Telegram & Discord Bots",
      "Web Scraping & Data Tools",
    ],
  },
  {
    title: "Other",
    icon: Wrench,
    items: [
      "WordPress",
      "Git/GitHub",
      "Vercel Deployment",
      "AI Tools Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Skills
        </h2>
        <p className="mb-12 max-w-2xl text-slate-400">
          Technologies and tools I work with to deliver quality solutions.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="card-hover rounded-2xl border border-surface-600 bg-surface-800/50 p-6 shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-400">
                  <Icon size={24} />
                </div>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg bg-surface-700 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
