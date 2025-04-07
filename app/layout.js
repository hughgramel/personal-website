//app/layout.js

import { Roboto, Roboto_Mono, JetBrains_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});
const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hugh Gramelspacher",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${jetBrains_Mono.variable} ${monaSans.variable} antialiased min-h-screen flex flex-col bg-[#282A36] text-[#F8F8F2]`}
      >
        
        <main className="flex-grow">
          {children}
        </main>
        <footer className="w-full text-center text-sm text-gray-400 py-6">

        </footer>

      </body>
    </html>
  );
}
