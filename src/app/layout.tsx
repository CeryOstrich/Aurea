import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Playfair_Display, Inter, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aulia & Nabila — Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Aulia & Nabila. 12 December 2026.",
  keywords: ["wedding", "invitation", "Aulia", "Nabila", "undangan", "pernikahan"],
  authors: [{ name: "Auréa" }],
  openGraph: {
    title: "Aulia & Nabila — Wedding Invitation",
    description: "You are cordially invited to celebrate the wedding of Aulia & Nabila.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0E0E0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
