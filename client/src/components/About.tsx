import { languages, profile, softSkills } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" index="01 — About" title="A quick introduction">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5">
            {profile.summary.map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed ${i === 0 ? "text-lg text-fg" : "text-muted"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
                How I work
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
                Languages
              </h3>
              <ul className="mt-4 space-y-2.5">
                {languages.map((language) => (
                  <li key={language.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{language.name}</span>
                    <span className="font-mono text-xs text-muted">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
