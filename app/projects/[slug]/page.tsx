import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AnimatedSection } from "@/components/animated-section";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.subtitle
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const nodes =
    project.slug === "distributed-job-scheduler"
      ? ["Client", "Spring Boot API", "PostgreSQL", "Kafka", "Worker Pool", "Redis Locks"]
      : project.slug === "multi-agent-routing"
        ? ["Gateway", "Orchestrator", "Kafka", "Specialized Agents", "MongoDB"]
        : ["Repository", "Ingestion API", "Vector Index", "Neo4j Graph", "RAG Query Layer"];
  const sections = getCaseStudySections(project.slug);

  return (
    <>
      <section className="border-b border-border bg-card/20 py-14 md:py-20">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/projects">
              <ArrowLeft />
              Projects
            </Link>
          </Button>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Badge variant={project.category === "AI Infrastructure" ? "amber" : "default"}>
                {project.category}
              </Badge>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-balance md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-border bg-card p-4">
                  <div className="font-mono text-2xl font-semibold text-primary">{metric.value}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="border-b border-border py-12 md:py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">Problem</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">{project.problem}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild className="mt-8" variant="outline">
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub Repository <ArrowUpRight />
              </a>
            </Button>
          </div>
          <ArchitectureFlow nodes={nodes} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-card/20 py-12 md:py-16">
        <div className="container grid gap-5 lg:grid-cols-2">
          {sections.map((section) => (
            <CaseStudyBlock key={section.title} title={section.title} items={section.items} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-normal">Lessons Learned</h2>
          <div className="mt-6 grid gap-3">
            {project.lessons.map((lesson) => (
              <div key={lesson} className="rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
                {lesson}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}

function CaseStudyBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-panel">
      <h2 className="font-mono text-xs uppercase text-primary">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-sm leading-6 text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function getCaseStudySections(slug: string) {
  if (slug === "distributed-job-scheduler") {
    return [
      {
        title: "Requirements",
        items: [
          "Support immediate, delayed, and cron-based execution without coupling execution to API requests.",
          "Coordinate multiple workers without duplicate ownership of due jobs.",
          "Recover from worker crashes while preserving at-least-once delivery semantics."
        ]
      },
      {
        title: "Architecture",
        items: [
          "Spring Boot API accepts scheduling requests and writes canonical job state to PostgreSQL.",
          "Indexed due-job scans lease work in batches and publish execution events through Kafka.",
          "Worker pools consume queue partitions while Redis locks guard critical coordination paths."
        ]
      },
      {
        title: "Design Decisions",
        items: [
          "Used PostgreSQL FOR UPDATE SKIP LOCKED for concurrent leasing without blocking worker pools.",
          "Used the outbox pattern so database state and Kafka publication can be reconciled reliably.",
          "Kept retry metadata in PostgreSQL so backoff, DLQs, and crash recovery remain inspectable."
        ]
      },
      {
        title: "Scalability",
        items: [
          "Batch leasing reduces database round trips under high due-job volume.",
          "Kafka fan-out lets API traffic and worker execution scale independently.",
          "Validated 100K+ jobs/day with indexed due-time scans and isolated queues."
        ]
      },
      {
        title: "Reliability",
        items: [
          "Lease recovery reclaims expired work after worker crashes.",
          "Dead letter queues preserve failed jobs after retry exhaustion.",
          "Exponential backoff reduces repeated pressure from failing downstream tasks."
        ]
      },
      {
        title: "Challenges",
        items: [
          "Preventing duplicate processing while keeping worker throughput high.",
          "Making delayed and cron jobs efficient without treating Kafka as the source of truth.",
          "Making failures observable across scheduler, broker, and worker boundaries."
        ]
      },
      {
        title: "Tradeoffs",
        items: [
          "At-least-once delivery accepts possible duplicate execution, so worker idempotency matters.",
          "PostgreSQL leasing is operationally simpler than a bespoke coordinator but needs careful indexing.",
          "Redis locks add coordination speed while requiring explicit expiry and recovery behavior."
        ]
      },
      {
        title: "Results",
        items: [
          "Processed 100K+ jobs/day in load validation.",
          "Supported immediate, delayed, and cron-based execution paths.",
          "Added observability around retries, lease recovery, DLQs, and worker execution."
        ]
      }
    ];
  }

  if (slug === "multi-agent-routing") {
    return [
      {
        title: "Why Multi-Agent",
        items: [
          "Classification, retrieval, validation, and escalation had different scaling and failure profiles.",
          "A single-agent baseline reached 68% accuracy, while specialized agents reached 95%+.",
          "Separating agents made reasoning failures easier to isolate and recover."
        ]
      },
      {
        title: "Architecture",
        items: [
          "Gateway accepts citizen-service requests and forwards routing work to an orchestrator.",
          "Kafka buffers work between orchestration and specialized agents.",
          "MongoDB stores request context, outcomes, and evaluation traces."
        ]
      },
      {
        title: "Scaling Strategy",
        items: [
          "Scaled specialized agents independently based on query category pressure.",
          "Used Kafka lag as a backpressure signal for overloaded stages.",
          "Sustained 1200+ requests/min with sub-300ms p95 latency."
        ]
      },
      {
        title: "Failure Isolation",
        items: [
          "Agent failures do not directly take down the API gateway path.",
          "Kafka boundaries allow retry and replay of failed stages.",
          "Azure App Insights helped identify recurring reasoning-chain failures."
        ]
      },
      {
        title: "Evaluation Metrics",
        items: [
          "Measured task accuracy across 10,000+ citizen-service queries.",
          "Tracked throughput, uptime, and latency alongside final routing quality.",
          "Compared multi-agent results against the single-agent baseline."
        ]
      },
      {
        title: "Results",
        items: [
          "Reached 95%+ task accuracy, up 27 percentage points from the single-agent baseline.",
          "Sustained 1200+ requests/min and 99.2% uptime.",
          "Kept routing latency under sub-300ms p95."
        ]
      }
    ];
  }

  return [
    {
      title: "Architecture",
      items: [
        "Repository ingestion extracts code structure and prepares semantic chunks.",
        "Vector retrieval and Neo4j graph traversal combine semantic and structural context.",
        "RAG answers natural-language repository questions with grounded code references."
      ]
    },
    {
      title: "Results",
      items: [
        "Indexed 50,000+ code files.",
        "Placed 2nd at HackAura.",
        "Demonstrated repository intelligence through semantic search and graph-backed traversal."
      ]
    }
  ];
}
