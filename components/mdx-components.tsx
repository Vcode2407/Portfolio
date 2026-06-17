import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

import { slugify } from "@/lib/blog";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: ({ className, children, ...props }) => (
    <h2
      id={slugify(childrenToText(children))}
      className={cn("mt-12 scroll-m-20 text-2xl font-semibold tracking-normal", className)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ className, children, ...props }) => (
    <h3
      id={slugify(childrenToText(children))}
      className={cn("mt-8 scroll-m-20 text-xl font-semibold tracking-normal", className)}
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ className, ...props }) => (
    <p className={cn("leading-8 text-muted-foreground", className)} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn("my-6 ml-6 list-disc space-y-2 text-muted-foreground", className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn("my-6 ml-6 list-decimal space-y-2 text-muted-foreground", className)} {...props} />
  ),
  li: ({ className, ...props }) => <li className={cn("pl-1", className)} {...props} />,
  code: ({ className, ...props }) => (
    <code
      className={cn(
        "rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        "my-6 overflow-x-auto rounded-lg border border-border bg-[#0b0d0f] p-4 text-sm",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a className={cn("text-primary underline-offset-4 hover:underline", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        "my-6 border-l-2 border-primary/60 pl-4 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
};

function childrenToText(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(childrenToText).join("");
  }

  return "";
}
