import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import NavigationBar from '@/components/layout/NavigationBar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aexiz Solution",
  description: "An innovative digital agency crafting unique brand experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Floating Header */}
        <Header logoText="aexiz" contactButtonText="contact" />
        {/* Floating NavigationBar fixed to bottom of viewport (visible on all sections) */}
        <div className="fixed left-0 right-0 z-40 bottom-8 pointer-events-none">
          <div className="w-full flex justify-center pointer-events-auto">
            <div className="max-w-7xl w-full flex justify-center">
              <NavigationBar />
            </div>
          </div>
        </div>
    {/* Main content below header and navbar */}
  <div className="pt-16 sm:pt-20 md:pt-24">
          {children}
        </div>
      </body>
    </html>
  );
}
