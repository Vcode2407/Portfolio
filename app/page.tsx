import { ArrowRight, GitPullRequest } from "lucide-react";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { BrandGithub, BrandLinkedin } from "@/components/brand-icons";
import { MetricGrid } from "@/components/metric-grid";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { experiences, openSource, projects, siteConfig } from "@/lib/site";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((project) =>
    ["distributed-job-scheduler", "candidate-ranking"].includes(project.slug)
  );
  const featuredExperience = experiences.filter((experience) =>
    ["micro1", "Alethe Labs"].includes(experience.company)
  );
  const focusBadges = [
    "Java & Spring Boot",
    "REST APIs",
    "Python & SQL",
    "TypeScript & React",
    "Testing & Debugging"
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 soft-radial-field" />
        <div className="absolute inset-0 technical-grid opacity-35" />
        <div className="absolute inset-0 noise-texture" />
        <div className="container relative flex min-h-[74svh] items-center py-14 md:py-20">
          <div className="max-w-4xl">
            <Badge variant="outline">Available for Summer 2027 internships in India</Badge>
            <h1 className="mt-7 max-w-4xl text-4xl font-semibold tracking-normal text-balance sm:text-5xl md:text-6xl">
              Vinay Kumar
            </h1>
            <p className="mt-5 max-w-3xl text-xl leading-8 text-foreground/88 md:text-2xl">
              Building reliable backend applications, integrations, and developer-facing tools.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              M.Tech Computer Science student at SRM University-AP, graduating June 2028. I work
              remotely as a contract software engineer at micro1 and build with Java, Spring Boot,
              Python, SQL, React, and TypeScript.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-border bg-card/70 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/projects">
                  Explore Projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
                  View Resume <ArrowRight />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                  GitHub <BrandGithub className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <BrandLinkedin className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="border-b border-border bg-card/20 py-12 md:py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Verified Evidence"
            title="Results that can be checked in code, tests, and public contributions."
            description="Project benchmarks, algorithm practice, and merged open-source fixes—presented without inflated production claims."
          />
          <div className="mt-8">
            <MetricGrid />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Featured Engineering Projects"
            description="Two evidence-backed case studies covering Java backend systems and a Python ranking pipeline."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="rounded-lg border border-border bg-card p-5 shadow-panel">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <Badge variant={project.category === "AI Infrastructure" ? "amber" : "default"}>
                    {project.category}
                  </Badge>
                  <span className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-primary">
                    {project.featuredMetric}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-normal">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <span key={tag} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <Link href={`/projects/${project.slug}`}>
                      Case Study <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub <ArrowRight />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Open Source"
            title="OpenTelemetry and fmt contributions, framed as engineering investigations."
            description="Merged patches in production-grade infrastructure projects, with root cause analysis and regression validation."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {openSource.map((item) => (
              <article key={item.project} className="rounded-lg border border-border bg-card p-5 shadow-panel">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase text-primary">{item.repo}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-normal">{item.project}</h3>
                  </div>
                  <Badge variant="outline">Merged contribution</Badge>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {(item.slug === "opentelemetry"
                    ? ["Parser recovery fix", "Regression testing", "Cross-platform validation"]
                    : ["32-bit architecture bug", "Root cause analysis", "Cross-platform validation"]
                  ).map((highlight) => (
                    <li key={highlight} className="rounded-md border border-border bg-secondary/40 px-3 py-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline">
                    <Link href={`/opensource/${item.slug}`}>
                      Case Study <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      GitHub <GitPullRequest />
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border py-16 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Experience"
            title="Backend product engineering grounded in implementation and debugging."
            description="Recent work emphasizes REST APIs, data models, tests, requirement clarification, and operational troubleshooting."
          />
          <div className="relative space-y-4 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
            {featuredExperience.slice(0, 2).map((experience) => (
              <article key={experience.company} className="relative ml-8 rounded-lg border border-border bg-card p-5 shadow-panel">
                <span className="absolute -left-[2.1rem] top-6 size-3 rounded-full border border-primary bg-background shadow-[0_0_24px_hsl(var(--primary)/0.8)]" />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{experience.period}</p>
                    <h3 className="mt-2 text-xl font-semibold">{experience.company}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.role}</p>
                  </div>
                  <Badge>{experience.technologies[0]}</Badge>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-muted-foreground">
                  {experience.impact.slice(0, 2).map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
              </article>
            ))}
            <Button asChild variant="outline" className="ml-8">
              <Link href="/experience">
                Full Experience <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Technical Writing"
              title="Short essays on systems, debugging, and backend work."
            />
            <Button asChild variant="outline">
              <Link href="/blog">
                All Posts <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-lg border border-border bg-card p-5 shadow-panel">
                <p className="font-mono text-xs text-muted-foreground">{post.readingTime}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
                <Button asChild variant="link" className="mt-4">
                  <Link href={`/blog/${post.slug}`}>
                    Read <ArrowRight />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
