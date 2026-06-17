import { ArrowRight, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing on distributed systems, Kafka, OpenTelemetry, C++ debugging, and backend engineering."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Blog"
            title="MDX-backed notes on systems and debugging."
            description="Starter articles are written to sound like engineering notes a hiring manager would actually want to scan."
          />
        </div>
      </section>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="size-3.5" />
                  {formatDate(post.date)}
                </span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-7">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button asChild className="mt-6" variant="outline">
                <Link href={`/blog/${post.slug}`}>
                  Read Article <ArrowRight />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
