import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rommel Suela | Software Developer in Swift Current, Saskatchewan",
  description:
    "Meet Rommel Suela, a software developer and programmer in Swift Current, Saskatchewan. Explore 9+ years of experience with .NET, C#, APIs, React, and full-stack development.",
  keywords: [
    "Rommel Suela",
    "software developer Swift Current",
    "software developer Saskatchewan",
    "programmer Swift Current",
    "programmer Saskatchewan",
    ".NET developer Saskatchewan",
    "C# developer Swift Current",
    "full-stack developer Saskatchewan",
  ],
  authors: [{ name: "Rommel Suela" }],
  creator: "Rommel Suela",
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Rommel Suela | Software Developer in Swift Current, Saskatchewan",
    description:
      "Software developer and programmer in Swift Current, Saskatchewan, with 9+ years of experience in .NET, C#, APIs, and full-stack development.",
  },
  twitter: {
    card: "summary",
    title: "Rommel Suela | Software Developer in Swift Current, Saskatchewan",
    description:
      "Software developer and programmer in Swift Current, Saskatchewan, specializing in .NET, C#, APIs, and full-stack development.",
  },
};

function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-10 flex items-center justify-between bg-gray-800 p-4 text-white"
    >
      <div className="text-lg font-bold">Rommel Suela</div>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:underline">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
