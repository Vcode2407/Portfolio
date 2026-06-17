import { ArrowLeft, CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article>
      <header className="border-b border-border bg-card/20 py-14 md:py-20">
        <div className="container max-w-4xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/blog">
              <ArrowLeft />
              Blog
            </Link>
          </Button>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-normal text-balance md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.description}</p>
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4" />
              {formatDate(post.date)}
            </span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <div className="container grid gap-10 py-12 md:py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="font-mono text-xs uppercase text-muted-foreground">Table of Contents</p>
            <nav className="mt-4 grid gap-2" aria-label="Table of contents">
              {post.toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground ${
                    item.level === 3 ? "pl-3" : ""
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <div className="prose prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]]
              }
            }}
          />
        </div>
      </div>
    </article>
  );
}
