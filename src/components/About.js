import { FiAward, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, experience, certifications } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading index="01" eyebrow="About" title="Operations mindset, engineer's toolkit." description={profile.summary} />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ol className="relative border-l border-ink-700">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.role} delay={i * 0.06} className="relative mb-10 pl-8 last:mb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-ink-950 bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role} <span className="font-normal text-zinc-500">· {item.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                </div>
                <ul className="mt-3 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1} className="space-y-4">
            <p className="eyebrow">Certifications</p>
            {certifications.map((c) => (
              <a
                key={c.title}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <FiAward size={18} />
                </span>
                <span className="flex-1">
                  <span className="block font-medium text-white">{c.title}</span>
                  <span className="text-sm text-zinc-500">{c.issuer}</span>
                </span>
                <FiArrowUpRight className="text-zinc-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
