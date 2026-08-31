import { experience } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02 — Experience"
      title="Where I've built things"
      lead="From responsive frontends to production multi-agent systems."
    >
      <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
        {experience.map((job, i) => (
          <li key={job.company} className="relative">
            {/* timeline node */}
            <span
              className={`absolute top-2 -left-[1.875rem] size-3 rounded-full ring-4 ring-bg sm:-left-[2.875rem] ${
                job.current ? "bg-accent-2" : "bg-border"
              }`}
            />
            <Reveal delay={i * 100}>
              <article className="card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      <span className="font-medium text-accent">{job.company}</span>
                      {" · "}
                      {job.location}
                    </p>
                  </div>
                  <span className="chip shrink-0">{job.period}</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/60"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {job.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
