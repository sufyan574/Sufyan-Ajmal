import Image from "next/image";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface-800/30">
      <div className="container-wide">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          About Me
        </h2>
        <p className="mb-12 max-w-2xl text-slate-400">
          Get to know who I am and what I do.
        </p>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="mb-8 flex justify-center">
              <Image
                src="/my-photo.jpg"
                alt="Sufyan Ajmal - Full-Stack Developer"
                width={400}
                height={500}
                priority
                className="w-[280px] h-[350px] rounded-2xl object-cover shadow-2xl transition-transform hover:scale-105 sm:w-[350px] sm:h-[450px] md:w-[400px] md:h-[500px]"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-300">
              Hello! I&apos;m <strong className="text-white">Sufyan Ajmal</strong>,
              a professional Full-Stack Web Developer based in Lahore, Pakistan
              with <strong className="text-primary-400">3+ years</strong> of
              hands-on experience.
            </p>
            <p className="leading-relaxed text-slate-300">
              As an AI graduate, I specialize in building fast, scalable and
              modern web applications. I combine powerful backend logic with
              clean, responsive frontends using Laravel, React, Next.js, Node.js
              and databases like MySQL, MongoDB.
            </p>

            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-700 text-primary-400">
                  <MapPin size={20} />
                </span>
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-700 text-primary-400">
                  <Briefcase size={20} />
                </span>
                <span>3+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-700 text-primary-400">
                  <GraduationCap size={20} />
                </span>
                <span>AI Graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
