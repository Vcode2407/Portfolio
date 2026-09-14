import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

import { BrandGithub, BrandLinkedin } from "@/components/brand-icons";
import { navItems, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container grid gap-8 py-10 md:grid-cols-[1.2fr_1fr]">
        <div className="max-w-xl">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Software engineer focused on backend applications, integrations, testing, and open source.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${siteConfig.email}`}>
              <Mail className="size-4" />
              {siteConfig.email}
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteConfig.links.github}>
              <BrandGithub className="size-4" />
              GitHub
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteConfig.links.linkedin}>
              <BrandLinkedin className="size-4" />
              LinkedIn
            </a>
            <a className="inline-flex items-center gap-2 hover:text-foreground" href={siteConfig.links.topmate}>
              <ExternalLink className="size-4" />
              Topmate
            </a>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 md:justify-self-end" aria-label="Footer">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
