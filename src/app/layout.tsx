import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                Click to punch NLP
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-4">
              <Link
                  href="/"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                Home
              </Link>
              <Link
                  href="/models"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                  Models
              </Link>
              <Link
                  href="/about"
                  className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          © {new Date().getFullYear()} T3 App. All rights reserved.
        </div>
      </footer>
      </body>
      </html>
  );
}