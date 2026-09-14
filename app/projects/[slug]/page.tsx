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
      : project.slug === "candidate-ranking"
        ? ["JSONL Input", "Feature Extraction", "Deterministic Scoring", "Bounded Top-K", "Validated CSV"]
      : project.slug === "multi-agent-routing"
        ? ["Gateway", "Orchestrator", "Shared Contracts", "Specialist Modules", "Validator"]
        : ["Input", "Processing", "Validation", "Output"];
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
          "Verified 10,000 jobs across 100 simulated workers with zero failures in the recorded load test."
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
          "Completed a 10,000-job load test across 100 simulated workers with zero failures.",
          "Supported immediate, delayed, and cron-based execution paths.",
          "Added observability around retries, lease recovery, DLQs, and worker execution."
        ]
      }
    ];
  }

  if (slug === "candidate-ranking") {
    return [
      {
        title: "Requirements",
        items: [
          "Rank a 100,000-profile JSONL dataset against a fixed job description.",
          "Return exactly 100 unique candidates with ordered scores and evidence-grounded reasons.",
          "Run on CPU within the challenge's time and memory limits without external API calls."
        ]
      },
      {
        title: "Pipeline",
        items: [
          "Streamed records from JSONL instead of loading the full pool into memory.",
          "Extracted technical, experience, career, behavior, and risk signals.",
          "Maintained a bounded top-K and generated candidate-specific explanations."
        ]
      },
      {
        title: "Scoring Decisions",
        items: [
          "Weighted career-history evidence more heavily than self-reported skill lists.",
          "Applied penalties for stale, inconsistent, or keyword-heavy profiles.",
          "Kept the score deterministic so every ranking decision can be reproduced."
        ]
      },
      {
        title: "Scalability",
        items: [
          "Completed the recorded 100,000-profile full run in 73.32 seconds.",
          "Used streaming input and bounded top-100 storage to control memory growth.",
          "Avoided model calls and network dependencies in the ranking loop."
        ]
      },
      {
        title: "Validation",
        items: [
          "Unit tests cover core ranking and submission behavior.",
          "Validated unique candidate IDs, ranks 1 through 100, and decreasing scores.",
          "The final submission passed the supplied challenge validator."
        ]
      },
      {
        title: "Results",
        items: [
          "Produced 100 ranked candidates from the 100,000-profile pool.",
          "Completed the full CPU-only run in 73.32 seconds.",
          "Generated explanations grounded in extracted profile facts."
        ]
      }
    ];
  }

  if (slug === "multi-agent-routing") {
    return [
      {
        title: "Architecture Goal",
        items: [
          "Separate gateway, orchestration, specialist, and validation responsibilities.",
          "Define stable message contracts before implementing distributed flows.",
          "Keep specialist services independently testable and deployable in the target design."
        ]
      },
      {
        title: "Architecture",
        items: [
          "A 10-module Maven reactor organizes shared code, gateway, orchestration, five specialist agents, validation, and benchmarking.",
          "Shared JSON schemas define agent request and response contracts.",
          "Kafka configuration and Docker assets prepare the asynchronous integration boundary."
        ]
      },
      {
        title: "Verification",
        items: [
          "JUnit architecture checks verify required service layers and package boundaries.",
          "Shared test support prepares repeatable integration fixtures.",
          "Benchmark and load-testing modules make future performance claims measurable."
        ]
      },
      {
        title: "Design Boundaries",
        items: [
          "Agent request and response schemas make malformed messages detectable.",
          "Specialist services expose readiness and runtime boundaries independently.",
          "The target Kafka design allows future retry and replay without coupling it to the request thread."
        ]
      },
      {
        title: "Current Scope",
        items: [
          "The repository is an architecture prototype, not a production deployment.",
          "Measured accuracy, throughput, uptime, and latency remain future validation work.",
          "The README and case study distinguish implemented structure from roadmap targets."
        ]
      },
      {
        title: "Implemented",
        items: [
          "Created the 10-module Java 21 Maven structure and shared contracts.",
          "Added architecture smoke tests across service modules.",
          "Prepared Kafka schemas, local infrastructure, and benchmark scaffolding."
        ]
      }
    ];
  }

  return [];
}
