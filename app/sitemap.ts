import type { MetadataRoute } from "next";

import { getAllPosts } from "@/lib/blog";
import { openSource, projects, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/open-source", "/experience", "/blog", "/about", "/resume", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date()
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date()
  }));

  const openSourceRoutes = openSource.map((item) => ({
    url: `${siteConfig.url}/opensource/${item.slug}`,
    lastModified: new Date()
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...routes, ...projectRoutes, ...openSourceRoutes, ...postRoutes];
}
