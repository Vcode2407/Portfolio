"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProjectFilterProps = {
  projects: Project[];
};

const filters = ["All", "Distributed Systems", "AI Infrastructure", "Developer Tools"] as const;

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "rounded-md border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              active === filter && "border-primary/40 bg-primary/10 text-primary"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.slug} className="rounded-lg border border-border bg-card p-5 shadow-panel">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <Badge variant={project.category === "AI Infrastructure" ? "amber" : "default"}>
                  {project.category}
                </Badge>
                <h2 className="mt-4 text-xl font-semibold tracking-normal">{project.title}</h2>
              </div>
              <span className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-primary">
                {project.featuredMetric}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.subtitle}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.slice(0, 6).map((tag) => (
                <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm">
                <Link href={`/projects/${project.slug}`}>
                  Case Study <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href={project.repo} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight />
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
