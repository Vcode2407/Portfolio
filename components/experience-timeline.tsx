import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Experience } from "@/lib/site";

export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="space-y-5">
      {experiences.map((experience) => (
        <article key={experience.company} className="rounded-lg border border-border bg-card p-5 shadow-panel">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge>{experience.company}</Badge>
              <h2 className="mt-4 text-2xl font-semibold tracking-normal">{experience.role}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {experience.period} - {experience.location}
              </p>
            </div>
            <div className="flex max-w-full flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span key={technology} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">{experience.summary}</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <ImpactColumn title="Challenges" items={experience.challenges} />
            <ImpactColumn title="Architecture Decisions" items={experience.architecture} />
            <ImpactColumn title="Impact" items={experience.impact} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ImpactColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase text-muted-foreground">{title}</h3>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
