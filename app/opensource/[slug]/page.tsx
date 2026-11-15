import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { openSource } from "@/lib/site";

type OpenSourceCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return openSource.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: OpenSourceCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = openSource.find((entry) => entry.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.project} Open Source Case Study`,
    description: item.problem
  };
}

export default async function OpenSourceCaseStudyPage({ params }: OpenSourceCaseStudyPageProps) {
  const { slug } = await params;
  const item = openSource.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  const sections = [
    { title: "Root Cause", detail: item.rootCause },
    { title: "Fix", detail: item.fix },
    { title: "Regression Tests", detail: item.testing }
  ];

  return (
    <article>
      <header className="border-b border-border bg-card/20 py-14 md:py-20">
        <div className="container max-w-5xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/open-source">
              <ArrowLeft />
              Open Source
            </Link>
          </Button>
          <Badge>{item.repo}</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-balance md:text-5xl">
            {item.project}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{item.problem}</p>
          <Button asChild className="mt-8" variant="outline">
            <a href={item.href} target="_blank" rel="noreferrer">
              PR #{item.prNumber} <ArrowUpRight />
            </a>
          </Button>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <h2 className="font-mono text-xs uppercase text-primary">{section.title}</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{section.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
