"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/data/site";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Archive", href: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "border-b border-ink-700/80 bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 font-mono text-sm text-white" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-ink-600 bg-ink-800 text-accent transition group-hover:border-accent">
            H
          </span>
          <span className="hidden sm:inline">huzaifa.hassan</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-zinc-400 transition hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-400 transition hover:text-white">
            <FiGithub size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-400 transition hover:text-white">
            <FiLinkedin size={18} />
          </a>
          <Link href="/#contact" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent">
            Contact
          </Link>
        </div>

        <button
          className="text-zinc-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="container-site pb-6 md:hidden">
          <ul className="flex flex-col gap-1">
            {[...navItems, { label: "Contact", href: "/#contact" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-zinc-300 hover:bg-ink-800 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
