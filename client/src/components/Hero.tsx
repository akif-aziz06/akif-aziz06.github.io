import { profile, stats } from "@/data/portfolio";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center pt-28 pb-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-bg-elev px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-2 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-2" />
            </span>
            Open to AI / software engineering roles
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-gradient mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {profile.role} · {profile.roleAlt}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              View my work
              <ArrowIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elev px-5 py-2.5 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="size-4" />
              Résumé
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid size-10 place-items-center rounded-full border border-border bg-bg-elev text-muted transition hover:border-accent hover:text-fg"
              >
                <GitHubIcon className="size-[18px]" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full border border-border bg-bg-elev text-muted transition hover:border-accent hover:text-fg"
              >
                <LinkedInIcon className="size-[18px]" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-muted">
            <PinIcon className="size-4" />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={380}>
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-bg-elev p-5">
                <dt className="text-2xl font-bold tracking-tight text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
