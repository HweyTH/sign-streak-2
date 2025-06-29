import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weights: ["400", "600"],
  display: "swap"
});

export const  metadata ={
  title: "Sign Streak II",
  description: "A minimalistic sign language racing game"
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} bg-black text-white`}>
        <div className={"min-h-screen flex flex-col"}>
          <Header />
          <div className="h-8"></div>
          <main className="flex-grow flex px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}