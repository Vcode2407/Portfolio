import type { Metadata } from "next";

import { AnimatedSection } from "@/components/animated-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SectionHeading } from "@/components/section-heading";
import { achievements, certifications, experiences, skillGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional software engineering experience, impact, architecture decisions, and technologies."
};

export default function ExperiencePage() {
  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Experience"
            title="Remote backend work, platform ownership, and measurable product impact."
            description="Each role is framed by the engineering challenge, architectural choice, and the operational result."
          />
        </div>
      </section>

      <AnimatedSection className="border-b border-border py-12 md:py-16">
        <div className="container">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-b border-border bg-card/20 py-12 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Technical Range"
            title="A backend-heavy skill set with reliability and AI infrastructure context."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="rounded-lg border border-border bg-card p-5 shadow-panel">
                <h2 className="font-mono text-xs uppercase text-muted-foreground">{group.label}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Leadership" title="Signals beyond coursework." />
          <div className="grid gap-4">
            <div className="grid gap-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="rounded-lg border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
                  {achievement}
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border bg-card p-5 shadow-panel">
              <h2 className="font-mono text-xs uppercase text-muted-foreground">Certifications</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <span key={certification} className="rounded-md border border-border bg-secondary px-2 py-1 text-xs text-muted-foreground">
                    {certification}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
