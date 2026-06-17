import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

const schedulerNodes = ["Client", "API Layer", "PostgreSQL", "Kafka", "Workers", "Redis Locking"];

export function ArchitectureFlow({ nodes = schedulerNodes }: { nodes?: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="grid gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="grid gap-2">
            <div
              className={cn(
                "flex min-h-12 items-center justify-between rounded-md border border-border bg-secondary/70 px-4",
                index === 0 && "border-primary/40 bg-primary/10",
                index === nodes.length - 1 && "border-amber-400/35 bg-amber-400/10"
              )}
            >
              <span className="font-mono text-sm">{node}</span>
              <span className="text-xs text-muted-foreground">0{index + 1}</span>
            </div>
            {index < nodes.length - 1 ? (
              <ArrowDown className="mx-auto size-4 text-muted-foreground" aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
