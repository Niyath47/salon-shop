import type { Metadata } from "next";
import "./globals.css";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: `A blush-neutral salon experience. Precision cutting, lived-in color, and quiet ritual.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='30' fill='%23F7F1E6' stroke='%23A96038' stroke-width='3'/%3E%3Ctext x='32' y='42' font-family='Georgia,serif' font-style='italic' font-size='30' fill='%2326190F' text-anchor='middle'%3EL%3C/text%3E%3C/svg%3E"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,300;1,14..32,400;1,14..32,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-ink antialiased overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
