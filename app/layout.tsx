import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riteshverma.dev"),
  title: "Ritesh Kumar Verma | Full-Stack Developer & AI/ML Enthusiast",
  description:
    "Explore the projects, experiments, and creative work of Ritesh Kumar Verma, a Computer Science student interested in full-stack development, AI/ML, IoT, and digital experiences.",
  keywords: [
    "Ritesh Kumar Verma",
    "Full-Stack Developer",
    "AI/ML",
    "Three.js",
    "IoT",
    "ESP32",
    "VIT Bhopal",
    "Portfolio",
    "Creative Tech",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Ritesh Kumar Verma", url: "https://github.com/codeliferitesh" }],
  creator: "Ritesh Kumar Verma",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riteshverma.dev",
    siteName: "Ritesh Kumar Verma Portfolio",
    title: "Ritesh Kumar Verma | Cinematic 3D Developer Portfolio",
    description:
      "Explore the floating tech archipelago of Ritesh Kumar Verma — Full-stack developer, AI/ML experimenter, and hardware builder at VIT Bhopal.",
    images: [
      {
        url: "/icon.svg",
        width: 800,
        height: 800,
        alt: "Ritesh Kumar Verma - RV Monogram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritesh Kumar Verma | Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Explore the floating tech archipelago of Ritesh Kumar Verma — Full-stack developer, AI/ML experimenter, and hardware builder.",
    creator: "@codeliferitesh",
    images: ["/icon.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08111F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#08111F] text-[#F5F7FA] antialiased selection:bg-[#54E5FF]/20 selection:text-[#54E5FF]">
        {children}
      </body>
    </html>
  );
}
