"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/site";

const EMAILJS = {
  serviceID: "service_ga194k4",
  templateID: "template_c60drrh",
  publicKey: "9C0d12Bv9KHG4FTt6",
};

const channels = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "huzaifa-hassan", href: profile.links.linkedin },
  { icon: FiGithub, label: "GitHub", value: "huzaifayasin681", href: profile.links.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS.serviceID,
        EMAILJS.templateID,
        { from_name: form.name, from_email: form.email, message: form.message, to_email: profile.email },
        EMAILJS.publicKey
      );
      toast.success("Thanks! Your message is on its way.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-t border-ink-800 bg-ink-900/30 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title="Let's talk."
          description="Hiring for a network, security or engineering role, or have a project in mind? Send a message and I will get back to you within a day or two."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal className="space-y-3">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card group flex items-center gap-4 p-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-ink-800 text-zinc-300 transition group-hover:text-accent">
                  <Icon size={18} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-zinc-500">{label}</span>
                  <span className="block truncate text-sm text-white">{value}</span>
                </span>
                <FiArrowUpRight className="text-zinc-600 transition group-hover:text-accent" />
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="card space-y-4 p-6 md:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-zinc-400">Name</span>
                  <input className="field" type="text" autoComplete="name" value={form.name} onChange={update("name")} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-zinc-400">Email</span>
                  <input className="field" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="you@company.com" />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-xs font-medium text-zinc-400">Message</span>
                <textarea className="field min-h-[160px] resize-y" value={form.message} onChange={update("message")} placeholder="Tell me about the role or project" />
              </label>
              <button type="submit" disabled={loading} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                {loading ? "Sending..." : (<>Send message <FiSend /></>)}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
