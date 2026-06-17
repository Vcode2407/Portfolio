import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { BrandGithub, BrandLinkedin } from "@/components/brand-icons";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for Vinay Kumar."
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-card/20 py-16 md:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="For internships, new grad roles, backend systems work, and open source conversations."
            description="No contact form. Just direct, recruiter-friendly links."
          />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container grid gap-4 md:grid-cols-2">
          <ContactCard icon={<Mail className="size-5" />} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
          <ContactCard icon={<Mail className="size-5" />} label="Profile Email" value={siteConfig.secondaryEmail} href={`mailto:${siteConfig.secondaryEmail}`} />
          <ContactCard icon={<BrandGithub className="size-5" />} label="GitHub" value="github.com/Vcode2407" href={siteConfig.links.github} />
          <ContactCard icon={<BrandLinkedin className="size-5" />} label="LinkedIn" value="linkedin.com/in/themanvk" href={siteConfig.links.linkedin} />
          <ContactCard icon={<ExternalLink className="size-5" />} label="Topmate" value="topmate.io/vinayme" href={siteConfig.links.topmate} />
          <ContactCard icon={<Phone className="size-5" />} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replaceAll("-", "")}`} />
          <div className="rounded-lg border border-border bg-card p-5 shadow-panel md:col-span-2">
            <div className="flex items-center gap-3 text-primary">
              <MapPin className="size-5" />
              <span className="font-mono text-xs uppercase">Location</span>
            </div>
            <p className="mt-3 text-lg font-semibold">{siteConfig.location}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Available for remote roles and relocation-aligned software engineering opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-panel">
      <div className="flex items-center gap-3 text-primary">
        {icon}
        <span className="font-mono text-xs uppercase">{label}</span>
      </div>
      <p className="mt-3 text-lg font-semibold">{value}</p>
      <Button asChild className="mt-5" variant="outline">
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
          Open
        </a>
      </Button>
    </div>
  );
}
