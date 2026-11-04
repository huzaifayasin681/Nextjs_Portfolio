"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { profile, stats } from "@/data/site";

const terminalLines = [
  { prompt: "status", out: "all systems operational", ok: true },
  { prompt: "focus", out: "noc · security · full stack" },
  { prompt: "shipping", out: "forensics, platforms, automation" },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-site relative grid items-center gap-14 pb-20 md:grid-cols-[1.35fr_1fr] md:pb-28">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-3 py-1.5 text-xs text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.available}
          </motion.div>

          <motion.h1 {...fade(0.05)} className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </motion.h1>
          <motion.p {...fade(0.1)} className="mt-3 font-mono text-sm text-accent md:text-base">
            {profile.role}
          </motion.p>
          <motion.p {...fade(0.15)} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.headline}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-9 flex flex-wrap gap-3">
            <Link href="/#work" className="btn-primary">
              View my work <FiArrowRight />
            </Link>
            <Link href="/#contact" className="btn-ghost">
              Get in touch
            </Link>
          </motion.div>

          <motion.div {...fade(0.25)} className="mt-9 flex items-center gap-5 text-sm text-zinc-500">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <FiGithub size={20} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
              <FiMail size={20} />
            </a>
            <span className="h-4 w-px bg-ink-600" />
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin size={14} /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="card overflow-hidden p-0">
            <div className="flex items-center gap-1.5 border-b border-ink-700 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
              <span className="ml-3 font-mono text-[11px] text-zinc-500">~/huzaifa</span>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 768px) 384px, 100vw"
                className="object-cover object-top grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
            </div>
            <div className="space-y-2 px-5 py-5 font-mono text-[13px]">
              {terminalLines.map((l) => (
                <p key={l.prompt} className="flex gap-2">
                  <span className="text-accent">$</span>
                  <span className="text-zinc-500">{l.prompt}</span>
                  <span className={l.ok ? "text-accent" : "text-zinc-300"}>{l.out}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-ink-800 bg-ink-900/40">
        <dl className="container-site grid grid-cols-1 divide-y divide-ink-800 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3 py-6 sm:px-6 first:sm:pl-0">
              <dt className="text-3xl font-semibold text-white">{s.value}</dt>
              <dd className="text-sm text-zinc-500">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
