import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiveChatButton from "./components/LiveChatButton";
import Footer from "./components/Footer";
import { NavbarDemo } from "@/components/ui/acui-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeGarage - Mobile App",
  description: "Your one-stop solution for automotive services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 min-h-screen text-gray-900`}
      >
        <NavbarDemo />
        {/* <FloatingHeader />
        <HolographicHeader />
        <CinematicHeader />
        <HolographicHeader />
        <NeuralHeader />
        <MorphingHeader /> */}
        {children}
        <LiveChatButton />
        <Footer />
      </body>
    </html>
  );
}
