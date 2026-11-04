import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10">
      <div className="container-site flex flex-col items-center justify-between gap-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
            <FiGithub size={18} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-white">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
