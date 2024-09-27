import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact List",
  description: "A simple web app to manage contacts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex flex-row bg-blue-950">
          <div className="text-white text-lg font-bold p-4 hover:text-gray-500">
            <Link href="/contacts">Contact List</Link>
          </div>
          <div className="text-white text-lg font-bold p-4 hover:text-gray-500">
            <Link href="/contacts/new">Add New</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
