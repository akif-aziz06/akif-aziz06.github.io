import { skills } from "@/data/portfolio";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04 — Skills"
      title="Tools I reach for"
      lead="The stack behind the agents, pipelines, and interfaces."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 2) * 80}>
            <div className="card card-hover h-full p-6">
              <h3 className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
                <span className="size-1.5 rounded-full bg-accent-2" />
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
