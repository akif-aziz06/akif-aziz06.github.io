import type { ReactElement, SVGProps } from "react";
import { profile } from "@/data/portfolio";
import {
  ExternalIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "./Icons";
import Reveal from "./Reveal";
import Section from "./Section";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  Icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  external?: boolean;
};

const links: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    Icon: PhoneIcon,
  },
  {
    label: "GitHub",
    value: "akif-aziz06",
    href: profile.socials.github,
    Icon: GitHubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "akif-aziz",
    href: profile.socials.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      index="06 — Contact"
      title="Let's build something"
      lead="Open to AI engineering roles, freelance builds, and interesting problems. The fastest way to reach me is email."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={(i % 2) * 80}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="card card-hover group flex items-center gap-4 p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-surface text-muted transition group-hover:text-accent">
                <link.Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-xs tracking-[0.15em] text-muted uppercase">
                  {link.label}
                </span>
                <span className="mt-1 block truncate text-sm font-medium">
                  {link.value}
                </span>
              </span>
              {link.external ? (
                <ExternalIcon className="ml-auto size-4 shrink-0 text-muted transition group-hover:text-accent" />
              ) : null}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={160}>
        <div className="card mt-5 flex flex-wrap items-center justify-between gap-4 p-6">
          <p className="inline-flex items-center gap-2 text-sm text-muted">
            <PinIcon className="size-4" />
            Based in {profile.location} · available remotely
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition hover:opacity-90"
          >
            <MailIcon className="size-4" />
            Say hello
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
