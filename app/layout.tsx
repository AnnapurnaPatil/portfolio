import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SITE_URL, SITE_NAME } from "../lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Annapurna Patil - Front-End Developer",
    template: "%s | Annapurna Patil's Portfolio",
  },
  description: "Passionate Front-End Developer with strong foundational skills in HTML, CSS, JavaScript, React, and Angular. Eager to apply learned knowledge and grow within a dynamic team, contributing to user-friendly web experiences.",
  keywords: [
    "front-end developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "JavaScript developer",
    "frontend developer",
    "portfolio",
    "web development",
    "software engineer",
    "UI/UX",
    "responsive design",
    "modern web technologies",
    "AWS",
    "Git",
    "Tailwind CSS",
    "Framer Motion",
    "Angular developer",
    "HTML/CSS expert"
  ],
  authors: [{ name: "Annapurna Patil", url: SITE_URL }],
  creator: "Annapurna Patil",
  publisher: "Annapurna Patil",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Annapurna Patil's Portfolio - Front-End Developer",
    description: "Experienced Front-End developer specializing in React, Next.js, and modern web technologies. Building innovative digital solutions with clean, efficient code.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Annapurna Patil's Portfolio - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annapurna Patil's Portfolio - Front-End Developer",
    description: "Experienced Front-End developer specializing in React, Next.js, and modern web technologies. Building innovative digital solutions.",
    images: ["/og-image.png"],
    creator: "@annapurna",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
  classification: "portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#ff8c00",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "Annapurna's Portfolio",
    statusBarStyle: "black-translucent",
  },
  other: {
    "msapplication-TileColor": "#ff8c00",
    "theme-color": "#0a0a0a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ErrorBoundary>
          <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
            <div className="relative min-h-screen">
              <ThemeToggle />
              {children}
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
