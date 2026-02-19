import { LayoutDashboard, ShoppingCart, Code, Layout, Server, Bot } from "lucide-react";

const services = [
  {
    title: "WordPress Website Design",
    icon: LayoutDashboard,
    description:
      "Custom, fast-loading WordPress websites with beautiful designs, SEO optimization, responsive layouts, and easy content management. Perfect for blogs, portfolios, business sites, and landing pages.",
  },
  {
    title: "WooCommerce Solutions",
    icon: ShoppingCart,
    description:
      "Full WooCommerce store development — product catalogs, payment gateways, shipping integration, inventory management, custom themes, and performance optimization for high-converting online shops.",
  },
  {
    title: "PHP & Laravel Development",
    icon: Code,
    description:
      "Robust backend solutions using PHP and Laravel. Custom web applications, RESTful APIs, admin panels, complex business logic, database design (MySQL/MongoDB), and scalable architecture for startups and enterprises.",
  },
  {
    title: "React & Next.js Frontend Development",
    icon: Layout,
    description:
      "Modern, interactive and high-performance user interfaces using React.js and Next.js. Server-side rendering, static generation, app router, Tailwind CSS styling, responsive design, SEO optimization and smooth animations for fast-loading web applications and progressive web apps (PWAs).",
  },
  {
    title: "Node.js Backend & API Development",
    icon: Server,
    description:
      "Scalable and secure backend solutions with Node.js & Express. RESTful / GraphQL APIs, authentication (JWT, OAuth), real-time features (Socket.io), database integration (MongoDB, PostgreSQL), cloud deployment (Vercel, Render, AWS) and clean, maintainable code architecture for startups and growing products.",
  },
  {
    title: "Python Development & Automation",
    icon: Bot,
    description:
      "Custom Python solutions including automation scripts, web scrapers, data processing tools, Telegram/Discord bots, API integrations, task schedulers and backend logic. Fast, reliable scripts and bots that save time and handle repetitive or complex tasks efficiently.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 section-padding bg-surface-800/30 md:scroll-mt-24">
      <div className="container-wide">
        <h2 className="mb-16 text-center text-4xl font-bold text-white sm:text-5xl">
          My Services
        </h2>
        <p className="mx-auto mb-16 max-w-3xl text-center text-base text-zinc-400 sm:text-lg">
          I provide end-to-end web solutions — from beautiful frontends and
          powerful backends to complete e-commerce stores and content platforms.
        </p>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <Icon
                  size={44}
                  className="mb-6 text-emerald-400"
                  strokeWidth={1.5}
                />
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-zinc-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
