import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/navigation/Navigation";
import Footer from "@/Components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pocket",
  description: "App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
