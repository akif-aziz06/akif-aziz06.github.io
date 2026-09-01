import { profile, stats } from "@/data/portfolio";
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from "./Icons";
import Reveal from "./Reveal";
import Tilt3D from "./Tilt3D";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-center pt-28 pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* ── Left: the pitch ─────────────────────────────────── */}
          <div>
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
              <h1 className="mt-8 text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="text-gradient mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                {profile.role} · {profile.roleAlt}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
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
                  Resume
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
          </div>

          {/* ── Right: the portrait, on three depth planes ──────── */}
          <Reveal delay={220}>
            <Tilt3D max={9} className="relative mx-auto w-full max-w-[21rem]">
              {/* Plane 0 — colour bloom behind everything */}
              <div
                aria-hidden
                className="pulse-glow absolute -inset-8 rounded-[3rem] bg-linear-to-br from-accent/45 via-accent-2/25 to-transparent blur-3xl"
              />

              {/* Plane 1 — the framed portrait */}
              <div className="depth-1 relative overflow-hidden rounded-[2rem] border border-border bg-linear-to-b from-surface to-bg-elev shadow-2xl shadow-black/20">
                <img
                  src="/akif-aziz.png"
                  alt={`${profile.name}, ${profile.role}`}
                  width={500}
                  height={500}
                  fetchPriority="high"
                  decoding="async"
                  className="relative z-10 w-full select-none"
                  draggable={false}
                />
                {/* cursor-tracking specular highlight */}
                <div aria-hidden className="glare pointer-events-none absolute inset-0 z-20" />
                {/* grounds the cut-out edge against the frame */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 bg-linear-to-t from-bg-elev to-transparent"
                />
              </div>

              {/* Plane 3 — chips floating closest to the viewer */}
              <div className="depth-3 absolute -top-3 -left-5 hidden sm:block">
                <div className="float-slow rounded-xl border border-border bg-bg-elev/90 px-3 py-2 shadow-xl backdrop-blur-sm">
                  <p className="font-mono text-[11px] text-accent">Multi-Agent Systems</p>
                </div>
              </div>

              <div className="depth-2 absolute -right-5 bottom-16 hidden sm:block">
                <div className="float-slower rounded-xl border border-border bg-bg-elev/90 px-3 py-2 shadow-xl backdrop-blur-sm">
                  <p className="font-mono text-[11px] text-accent-2">RAG Pipelines</p>
                </div>
              </div>
            </Tilt3D>
          </Reveal>
        </div>

        {/* ── Stats, full width beneath both columns ─────────────── */}
        <Reveal delay={380}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
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
