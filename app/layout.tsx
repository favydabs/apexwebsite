import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header"; 
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Apex",
  description: "Energy engineering and infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}