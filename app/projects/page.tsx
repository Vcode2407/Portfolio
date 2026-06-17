import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { ProjectFilter } from "@/components/project-filter";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software engineering projects with architecture, scaling, reliability, and system design notes."
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) =>
    ["distributed-job-scheduler", "multi-agent-routing"].includes(project.slug)
  );

  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Project work presented as systems case studies."
            description="Filter by domain and open each case study to inspect the problem, architecture, tradeoffs, scaling strategy, and reliability plan."
          />
        </div>
      </section>
      <AnimatedSection className="py-12 md:py-16">
        <div className="container">
          <ProjectFilter projects={featuredProjects} />
        </div>
      </AnimatedSection>
    </>
  );
}
