import { profile, projects } from "@/data/portfolio";
import { ArrowIcon, GitHubIcon } from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      index="03 — Projects"
      title="Selected work"
      lead="Systems I designed end to end — agents, retrieval, and the product around them."
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 100}>
            <article className="card card-hover overflow-hidden">
              <div className="border-b border-border bg-surface/60 p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    {project.featured ? (
                      <span className="mb-3 inline-block font-mono text-[11px] tracking-[0.18em] text-accent-2 uppercase">
                        Featured project
                      </span>
                    ) : null}
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.name}
                      <span className="ml-2 text-lg font-medium text-muted">
                        {project.subtitle}
                      </span>
                    </h3>
                    <p className="mt-2 text-sm text-muted">{project.context}</p>
                  </div>
                  <span className="chip shrink-0">{project.period}</span>
                </div>

                <p className="mt-5 max-w-3xl leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h4 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
                  What I built
                </h4>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-0.5 font-mono text-xs text-accent">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={150}>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="card card-hover group flex items-center justify-between gap-6 p-6 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <GitHubIcon className="size-7 shrink-0 text-muted transition group-hover:text-fg" />
              <div>
                <h3 className="font-semibold tracking-tight">More on GitHub</h3>
                <p className="mt-1 text-sm text-muted">
                  Experiments, agent prototypes, and everything still in progress.
                </p>
              </div>
            </div>
            <ArrowIcon className="size-5 shrink-0 text-muted transition group-hover:translate-x-1 group-hover:text-accent" />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
