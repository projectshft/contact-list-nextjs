"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import "./globals.css";
import { ContactsProvider } from "context/ContactsContext";

export default function Layout({ children }) {
  // const router = useRouter();

  return (
    <>
      <html lang="en">
        <body>
          <ContactsProvider>{children}</ContactsProvider>
        </body>
      </html>
    </>
  );
}
