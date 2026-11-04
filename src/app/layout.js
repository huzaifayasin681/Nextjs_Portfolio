import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/data/site";

export const metadata = {
  metadataBase: new URL("https://nextjs-portfolio-opal-one.vercel.app"),
  title: {
    default: `${profile.name} | NOC Engineer, Security & Full Stack`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    "Huzaifa Hassan",
    "NOC Engineer",
    "Cybersecurity",
    "Full Stack Developer",
    "Next.js",
    "Threat Hunting",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.headline,
    type: "website",
    images: ["/profile.jpeg"],
  },
};

export const viewport = {
  themeColor: "#07090c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: "#11151b", color: "#e4e4e7", border: "1px solid #1a2029" },
          }}
        />
      </body>
    </html>
  );
}
