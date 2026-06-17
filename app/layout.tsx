import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { CommandMenu } from "@/components/command-menu";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { getSearchItems } from "@/lib/search";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Distributed Systems Engineer`,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Vinay Kumar",
    "distributed systems",
    "backend engineering",
    "software engineer intern",
    "new grad software engineer",
    "OpenTelemetry",
    "Kafka",
    "Spring Boot",
    "AI infrastructure"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} - Distributed Systems Engineer`,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Distributed Systems Engineer`,
    description: siteConfig.description
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const searchItems = getSearchItems();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background">
            <Navigation searchItems={searchItems} />
            <main>{children}</main>
            <SiteFooter />
            <CommandMenu items={searchItems} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
