import Link from "next/link";
import { FiGithub, FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { featuredProjects } from "@/data/site";

export default function Projects() {
  return (
    <section id="work" className="border-t border-ink-800 bg-ink-900/30 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Tools and platforms built for real operations."
          description="A selection of security tooling and production systems. Each one started from a concrete problem at work or for a client."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="card group flex flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">{p.category}</span>
                <div className="flex items-center gap-3 text-zinc-500">
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`} className="transition hover:text-white">
                      <FiGithub size={17} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live site`} className="transition hover:text-white">
                      <FiArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link href="/projects" className="btn-ghost">
            Browse all repositories <FiArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
