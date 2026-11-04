"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiSearch, FiStar } from "react-icons/fi";
import { profile } from "@/data/site";

const USER = "huzaifayasin681";

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function ProjectsArchive() {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("All");

  useEffect(() => {
    let alive = true;
    fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => {
        if (!alive) return;
        setRepos(data.filter((r) => !r.fork && r.name !== USER));
        setStatus("ready");
      })
      .catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
  }, []);

  const languages = useMemo(() => {
    const set = new Set(repos.map((r) => r.language).filter(Boolean));
    return ["All", ...Array.from(set).sort()];
  }, [repos]);

  const filtered = repos.filter((r) => {
    const q = query.toLowerCase();
    const matchesQuery = !q || r.name.toLowerCase().includes(q) || (r.description || "").toLowerCase().includes(q);
    const matchesLang = lang === "All" || r.language === lang;
    return matchesQuery && matchesLang;
  });

  return (
    <section className="pb-24 pt-32 md:pt-40">
      <div className="container-site">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
          <FiArrowLeft /> Back to home
        </Link>
        <p className="eyebrow mt-8">Archive</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">All repositories</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Everything public on my GitHub, pulled live and sorted by most recent activity.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <label className="relative flex-1">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              className="field pl-11"
              placeholder="Search repositories"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search repositories"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full border px-3 py-1.5 text-xs transition ${
                  lang === l ? "border-accent bg-accent-soft text-accent" : "border-ink-700 text-zinc-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          {status === "loading" && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card h-40 animate-pulse" />
              ))}
            </div>
          )}

          {status === "error" && (
            <div className="card p-8 text-center">
              <p className="text-zinc-300">Couldn&apos;t load repositories right now.</p>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-6">
                <FiGithub /> View on GitHub
              </a>
            </div>
          )}

          {status === "ready" && (
            <>
              <p className="mb-4 font-mono text-xs text-zinc-500">
                {filtered.length} of {repos.length} repositories
              </p>
              <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r) => (
                  <li key={r.id}>
                    <a
                      href={r.homepage || r.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group flex h-full flex-col p-5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="break-all font-medium text-white">{r.name.replace(/[-_]/g, " ")}</h2>
                        <FiArrowUpRight className="shrink-0 text-zinc-600 transition group-hover:text-accent" />
                      </div>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-400">{r.description || "No description provided."}</p>
                      <div className="mt-5 flex items-center gap-4 font-mono text-xs text-zinc-500">
                        {r.language && (
                          <span className="inline-flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-accent" />
                            {r.language}
                          </span>
                        )}
                        {r.stargazers_count > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <FiStar size={12} /> {r.stargazers_count}
                          </span>
                        )}
                        <span className="ml-auto">{timeAgo(r.pushed_at)}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              {filtered.length === 0 && <p className="text-zinc-500">No repositories match your search.</p>}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
