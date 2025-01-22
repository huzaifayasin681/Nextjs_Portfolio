// src/app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
