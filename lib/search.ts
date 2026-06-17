import { getAllPosts } from "@/lib/blog";
import { experiences, navItems, openSource, projects } from "@/lib/site";

export type SearchItem = {
  title: string;
  href: string;
  group: string;
  description: string;
};

export function getSearchItems(): SearchItem[] {
  const staticItems: SearchItem[] = navItems.map((item) => ({
    title: item.label,
    href: item.href,
    group: "Pages",
    description: `Open ${item.label}`
  }));

  const projectItems = projects
    .filter((project) => ["distributed-job-scheduler", "multi-agent-routing"].includes(project.slug))
    .map((project) => ({
      title: project.title,
      href: `/projects/${project.slug}`,
      group: "Projects",
      description: project.subtitle
    }));

  const experienceItems = experiences.map((experience) => ({
    title: experience.company,
    href: "/experience",
    group: "Experience",
    description: `${experience.role} - ${experience.period}`
  }));

  const ossItems = openSource.map((item) => ({
    title: item.project,
    href: `/opensource/${item.slug}`,
    group: "Open Source",
    description: item.problem
  }));

  const blogItems = getAllPosts().map((post) => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    group: "Blog",
    description: post.description
  }));

  return [...staticItems, ...projectItems, ...experienceItems, ...ossItems, ...blogItems];
}
