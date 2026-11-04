import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="eyebrow">
        <span className="text-zinc-500">{index} /</span> {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-zinc-400">{description}</p>}
    </Reveal>
  );
}
