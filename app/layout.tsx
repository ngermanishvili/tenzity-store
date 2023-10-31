import "@/styles/globals.css";
import { Metadata } from "next";
import Script from 'next/script';


import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { SiteBlob } from "@/components/site-blob";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Add the Tawk.to script here */}
          <Script
            strategy="lazyOnload"
            src="https://embed.tawk.to/60f0b0b2649e0a0a5ccb8b0e/1f9q3q9qk"
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >

          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <SiteBlob />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
