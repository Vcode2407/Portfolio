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

  const sections = getOpenSourceSections(slug);

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
              Pull Request <ArrowUpRight />
            </a>
          </Button>
        </div>
      </header>

      <section className="py-12 md:py-16">
        <div className="container grid gap-5 lg:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <h2 className="font-mono text-xs uppercase text-primary">{section.title}</h2>
              <ul className="mt-4 space-y-3">
                {section.items.map((text) => (
                  <li key={text} className="text-sm leading-6 text-muted-foreground">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

function getOpenSourceSections(slug: string) {
  if (slug === "opentelemetry") {
    return [
      {
        title: "Original Issue",
        items: [
          "Baggage header parsing could fail recovery when invalid percent-encoded entries appeared.",
          "The parser needed to reject malformed entries without losing valid baggage members."
        ]
      },
      {
        title: "Root Cause Analysis",
        items: [
          "Parser recovery treated malformed percent encoding too broadly.",
          "Valid members were not preserved cleanly after an invalid entry was encountered."
        ]
      },
      {
        title: "Investigation Process",
        items: [
          "Reduced the failing input to mixed valid and invalid baggage entries.",
          "Compared expected parser recovery behavior with actual member preservation."
        ]
      },
      {
        title: "Fix Implementation",
        items: [
          "Adjusted parser recovery to preserve valid entries while rejecting malformed ones.",
          "Kept the behavior narrow so the patch did not change unrelated header parsing semantics."
        ]
      },
      {
        title: "Regression Tests",
        items: [
          "Added focused tests around invalid percent-encoded baggage members.",
          "Validated behavior across Linux, macOS, and Windows CI."
        ]
      },
      {
        title: "Lessons Learned",
        items: [
          "Parser fixes are often about recovery semantics, not only accepting or rejecting input.",
          "A small open-source patch needs a narrow behavioral claim and strong regression coverage."
        ]
      }
    ];
  }

  return [
    {
      title: "32-bit Bug",
      items: [
        "fmt hexadecimal floating formatting failed on 32-bit i686 fallback uint128 behavior.",
        "The bug was architecture-specific, so 64-bit validation alone could miss it."
      ]
    },
    {
      title: "Investigation",
      items: [
        "Narrowed the failure to fallback uint128 operations used by format_hexfloat.",
        "Compared behavior between 32-bit and 64-bit builds to isolate the high-word corruption."
      ]
    },
    {
      title: "Root Cause",
      items: [
        "format_hexfloat masked rounded bits with bitwise NOT.",
        "The fallback operator~ truncated to 32 bits, corrupting the high word."
      ]
    },
    {
      title: "Fix",
      items: [
        "Corrected fallback uint128 bitwise behavior so high-word state survives the operation.",
        "Kept the change constrained to the fallback path that exposed the issue."
      ]
    },
    {
      title: "Validation",
      items: [
        "Validated across 32-bit and 64-bit architectures.",
        "Confirmed the fix addressed the architecture-specific failure rather than only the local symptom."
      ]
    },
    {
      title: "Pull Request",
      items: [
        "Submitted a focused patch with root cause context.",
        "Documented the architecture-specific failure mode for maintainers."
      ]
    }
  ];
}
