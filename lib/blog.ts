import fs from "node:fs";
import path from "node:path";

import readingTime from "reading-time";
import { parse as parseYaml } from "yaml";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  toc: { id: string; title: string; level: number }[];
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string): Post {
  const normalizedSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(POSTS_DIR, `${normalizedSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContents);

  return {
    slug: normalizedSlug,
    title: asString(data.title, "title"),
    description: asString(data.description, "description"),
    date: asString(data.date, "date"),
    tags: Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [],
    readingTime: readingTime(content).text,
    toc: extractToc(content),
    content
  };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

function parseFrontmatter(source: string) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);

  if (!match) {
    throw new Error("MDX post is missing frontmatter.");
  }

  return {
    data: parseYaml(match[1]) as Record<string, unknown>,
    content: source.slice(match[0].length)
  };
}

function asString(value: unknown, field: string) {
  if (typeof value !== "string") {
    throw new Error(`MDX frontmatter field \"${field}\" must be a string.`);
  }

  return value;
}

function extractToc(content: string) {
  return content
    .split(/\r?\n/)
    .map((line) => {
      const match = line.match(/^(##|###)\s+(.+)$/);
      if (!match) {
        return null;
      }

      const title = match[2].replace(/[`*_]/g, "").trim();
      return {
        id: slugify(title),
        title,
        level: match[1].length
      };
    })
    .filter((item): item is { id: string; title: string; level: number } => Boolean(item));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
