import { Roboto, Roboto_Mono, JetBrains_Mono, Mona_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";


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
  title: "Hugh's Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} ${jetBrains_Mono.variable} ${monaSans.variable} antialiased min-h-screen flex flex-col`}
      >
<header className="w-full text-[#F8F8F2] font-[family-name:var(--font-jetbrains-mono)] py-4">
  <div className="max-w-screen-xl mx-auto">
    <nav className="flex justify-center flex-wrap gap-4 sm:gap-12 lg:gap-45 px-4 py-4 items-center w-full">

            <Link href="/" className="p-1 font-medium text-lg uppercase hover:text-gray-300 hover:bg-[#44475A]">Home</Link>
            <Link href="/education" className="p-1 font-medium text-lg uppercase hover:text-gray-300 hover:bg-[#44475A]">Education</Link>
            <Link href="/work" className="p-1 font-medium text-lg uppercase hover:text-gray-300 hover:bg-[#44475A]">Work</Link>
            <Link href="/projects" className="p-1 font-medium text-lg uppercase hover:text-gray-300 hover:bg-[#44475A]">Projects</Link>
        </nav>
        </div>
      </header>
        
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
