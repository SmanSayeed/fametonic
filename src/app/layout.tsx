import type { Metadata } from "next";
import "./globals.scss";
import HomeLayout from "@/components/HomeLayout";
import { Figtree, Urbanist, Nunito } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["700", "800"],
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fametonic",
  description: "Turn Social Media Into a Profitable Career!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${urbanist.variable} `}>
      <body>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
