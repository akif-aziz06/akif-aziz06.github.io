import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp;
          Tailwind CSS
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-fg"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-fg"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-full border border-border text-muted transition hover:border-accent hover:text-fg"
          >
            <MailIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
