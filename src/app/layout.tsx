import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/home/nav";
import Navigation from "@/components/home/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ronit Kaushal – Frontend Developer & UI/UX Designer",
  description:
    "Portfolio of Ronit Kaushal – a passionate frontend developer and creative UI/UX designer crafting beautiful, user-friendly websites and interfaces.",
  keywords: [
    "Ronit Kaushal",
    "frontend developer portfolio",
    "UI UX designer",
    "Next.js developer",
    "creative web developer",
    "web design portfolio",
    "tailwind CSS projects",
    "figma designer",
    "graphic design",
    "frontend projects",
  ],
  authors: [{ name: "Ronit Kaushal", url: "https://ronitkaushal.vercel.app" }],
  creator: "Ronit Kaushal",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Ronit Kaushal – Frontend Developer & UI/UX Designer",
    description:
      "Explore Ronit Kaushal’s portfolio – featuring modern frontend development, creative UI/UX, and graphic design projects.",
    url: "https://ronitkaushal.vercel.app",
    siteName: "Ronit Kaushal",
    images: [
      {
        url: "https://ronitkaushal.vercel.app/OGImage.png", // Replace with your actual preview image
        width: 1200,
        height: 630,
        alt: "Ronit Kaushal Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ronit Kaushal – Frontend Developer & UI/UX Designer",
    description:
      "Discover modern, responsive websites and UI/UX design projects by Ronit Kaushal.",
    images: ["https://ronitkaushal.vercel.app/OGImage.png"], // Replace if needed
  },
  metadataBase: new URL("https://ronitkaushal.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          <Navigation />
        </ThemeProvider>
      </body>
    </html>
  );
}
