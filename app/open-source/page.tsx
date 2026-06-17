import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { openSource } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Open source contributions to OpenTelemetry Java and fmt with root cause analysis and validation notes."
};

export default function OpenSourcePage() {
  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Open Source"
            title="Production-grade debugging stories, not just merged-link trophies."
            description="Each contribution is framed the way a strong engineering interview would probe it: problem, root cause, fix, and testing strategy."
          />
        </div>
      </section>

      <AnimatedSection className="border-b border-border py-12 md:py-16">
        <div className="container grid gap-5">
          {openSource.map((item, index) => (
            <article key={item.project} className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-primary">0{index + 1} - {item.repo}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-normal">{item.project}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/opensource/${item.slug}`}>
                      Case Study <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="sm">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      Pull Request <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ContributionColumn title="Problem" value={item.problem} />
                <ContributionColumn title="Root Cause" value={item.rootCause} />
                <ContributionColumn title="Fix" value={item.fix} />
                <ContributionColumn title="Testing" value={item.testing} />
              </div>
              <div className="mt-5 rounded-lg border border-border bg-secondary/55 p-4">
                <p className="font-mono text-xs text-muted-foreground">{item.timeline}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Contribution Timeline"
            title="A repeatable debugging pattern."
            description="Reproduce precisely, isolate the root cause, patch narrowly, validate across the environments that exposed the failure."
          />
        </div>
      </AnimatedSection>
    </>
  );
}

function ContributionColumn({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/45 p-4">
      <h3 className="font-mono text-xs uppercase text-muted-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{value}</p>
    </div>
  );
}
