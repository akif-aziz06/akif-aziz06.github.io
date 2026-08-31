import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

export default function Section({ id, index, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
                {index}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            {lead ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lead}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
