import { education } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" index="05 — Education" title="Academic background">
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 90}>
            <div className="card card-hover flex h-full flex-col p-6">
              <span className="chip self-start">{entry.period}</span>
              <h3 className="mt-4 font-semibold tracking-tight">{entry.degree}</h3>
              <p className="mt-2 text-sm text-muted">{entry.school}</p>
              <p className="mt-auto pt-4 font-mono text-xs text-muted">
                {entry.location}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
