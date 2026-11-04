import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Skills"
          title="The stack I work with."
          description="From packet captures to production deployments: the tools I use day to day."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="card p-6">
              <h3 className="text-sm font-semibold text-white">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg border border-ink-700 bg-ink-800/80 px-3 py-1.5 text-sm text-zinc-300">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
