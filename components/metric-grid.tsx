"use client";

import { motion } from "framer-motion";

import { metrics } from "@/lib/site";

export function MetricGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
          className="rounded-lg border border-border bg-card/82 p-5 shadow-panel backdrop-blur transition-colors hover:border-primary/35"
        >
          <div className="font-mono text-3xl font-semibold text-primary md:text-4xl">
            {metric.value}
          </div>
          <div className="mt-3 font-medium">{metric.label}</div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
