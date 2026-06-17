import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-start justify-center py-16">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-normal">Page not found</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The page may have moved, or the route is not part of this portfolio.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back home</Link>
      </Button>
    </section>
  );
}
