import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "About Vinay Kumar's focus areas in application engineering, backend systems, testing, debugging, and open source."
};

const focusAreas = [
  {
    title: "Distributed Systems",
    text: "Designing queues, leases, retries, and recovery paths that stay understandable under concurrency."
  },
  {
    title: "Backend Engineering",
    text: "Building APIs, data models, and service boundaries with latency, correctness, and operational clarity in mind."
  },
  {
    title: "Backend Debugging",
    text: "Investigating production issues through logs, reproduction steps, root cause analysis, and customer-facing support context."
  },
  {
    title: "Open Source",
    text: "Contributing small, well-tested fixes to widely used infrastructure projects such as OpenTelemetry Java and fmt."
  },
  {
    title: "System Design",
    text: "Reasoning from product constraints into architecture decisions, failure modes, and measurable tradeoffs."
  },
  {
    title: "Application Engineering",
    text: "Translating business requirements into APIs, data flows, integrations, tests, and maintainable implementation notes."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="About"
            title="A backend engineer with a systems bias."
            description="Vinay is pursuing an M.Tech in Computer Science and Engineering at SRM University-AP, graduating in June 2028, while working remotely in AI benchmark engineering at Crossing Hurdles and backend product engineering at micro1."
          />
        </div>
      </section>
      <AnimatedSection className="py-12 md:py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <h2 className="text-xl font-semibold tracking-normal">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
