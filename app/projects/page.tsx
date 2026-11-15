import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { ProjectFilter } from "@/components/project-filter";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software engineering projects with architecture, scaling, reliability, and system design notes."
};

export default function ProjectsPage() {
  const listedProjects = [...featuredProjects, ...projects.filter((project) => !project.featured)];

  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="Backend and systems case studies"
            description="The three projects pinned on GitHub appear first. Each case study covers the architecture and how it was tested."
          />
        </div>
      </section>
      <AnimatedSection className="py-12 md:py-16">
        <div className="container">
          <ProjectFilter projects={listedProjects} />
        </div>
      </AnimatedSection>
    </>
  );
}
