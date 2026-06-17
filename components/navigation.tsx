"use client";

import { ExternalLink, Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandGithub, BrandLinkedin } from "@/components/brand-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { SearchItem } from "@/lib/search";
import { navItems, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navigation({ searchItems }: { searchItems: SearchItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function openCommandMenu() {
    window.dispatchEvent(new Event("open-command-menu"));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/82 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Vinay Kumar home">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 font-mono text-xs font-semibold text-primary">
            VK
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-semibold leading-none">{siteConfig.name}</span>
            <span className="block truncate text-xs text-muted-foreground">Distributed Systems</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                pathname === item.href && "bg-secondary text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            className="hidden w-52 justify-start text-muted-foreground md:inline-flex"
            onClick={openCommandMenu}
          >
            <Search className="size-4" />
            <span className="flex-1 text-left">Search</span>
            <kbd className="rounded border border-border px-1.5 font-mono text-[10px] text-muted-foreground">
              Ctrl K
            </kbd>
            <span className="sr-only">{searchItems.length} searchable items</span>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="GitHub" title="GitHub">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <BrandGithub className="size-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn" title="LinkedIn">
            <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <BrandLinkedin className="size-4" />
            </a>
          </Button>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container grid gap-2 py-3">
            <Button variant="outline" className="justify-start" onClick={openCommandMenu}>
              <Search className="size-4" />
              Search
            </Button>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm text-muted-foreground",
                  pathname === item.href && "bg-secondary text-foreground"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground"
            >
              Contact <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
