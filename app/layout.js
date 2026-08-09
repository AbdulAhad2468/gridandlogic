import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/app/components/animation/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Grid & Logic",
  description:
    "Grid & Logic — 3D websites, product configurators, and ecommerce built to ship for growing brands.",
  keywords: ["3D websites", "product configurators", "ecommerce", "web design", "Grid & Logic"],
  icons: {
    icon: { url: "/Grid%20%26%20Logic%20(LOGO).svg", type: "image/svg+xml" },
    shortcut: { url: "/Grid%20%26%20Logic%20(LOGO).svg", type: "image/svg+xml" },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020613",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
      suppressHydrationWarning
      className="min-h-full flex flex-col bg-background text-foreground"
    >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
