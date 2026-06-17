import { Download } from "lucide-react";
import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume viewer and PDF download for Vinay Kumar."
};

export default function ResumePage() {
  return (
    <>
      <section className="border-b border-border bg-card/20 py-14 md:py-20">
        <div className="container flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resume"
            title="Resume"
            description="A focused PDF resume for recruiters who need the document version."
          />
          <Button asChild>
            <a href={siteConfig.resumePath} download>
              Download PDF <Download />
            </a>
          </Button>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-panel">
            <iframe
              title="Vinay Kumar resume PDF"
              src={`${siteConfig.resumePath}#view=FitH`}
              className="h-[78vh] min-h-[620px] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
