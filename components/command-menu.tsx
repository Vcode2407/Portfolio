"use client";

import { ArrowUpRight, FileText, FolderKanban, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { SearchItem } from "@/lib/search";

type CommandMenuProps = {
  items: SearchItem[];
};

export function CommandMenu({ items }: CommandMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.key === "k" && (event.metaKey || event.ctrlKey)) || event.key === "/") {
        const target = event.target as HTMLElement | null;
        if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") return;
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const listener = () => setOpen(true);
    window.addEventListener("open-command-menu", listener);
    return () => window.removeEventListener("open-command-menu", listener);
  }, []);

  const groupedItems = useMemo(() => {
    return items.reduce<Record<string, SearchItem[]>>((groups, item) => {
      groups[item.group] = groups[item.group] ?? [];
      groups[item.group].push(item);
      return groups;
    }, {});
  }, [items]);

  function runCommand(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden">
        <DialogTitle className="sr-only">Search portfolio</DialogTitle>
        <DialogDescription className="sr-only">
          Search pages, projects, open source contributions, and blog posts.
        </DialogDescription>
        <Command>
          <CommandInput placeholder="Search systems, projects, posts..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {Object.entries(groupedItems).map(([group, groupItems]) => (
              <CommandGroup key={group} heading={group}>
                {groupItems.map((item) => (
                  <CommandItem key={`${item.group}-${item.href}-${item.title}`} onSelect={() => runCommand(item.href)}>
                    {item.group === "Projects" ? (
                      <FolderKanban className="size-4 text-primary" />
                    ) : item.group === "Blog" ? (
                      <FileText className="size-4 text-amber-300" />
                    ) : (
                      <Search className="size-4 text-muted-foreground" />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{item.title}</span>
                      <span className="block truncate text-xs text-muted-foreground">{item.description}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground" />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
