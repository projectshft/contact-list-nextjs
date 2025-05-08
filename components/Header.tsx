"use client";

import React from "react";
import Link from "next/link";
import AddContactsButton from "./AddContactsButton";
import SearchBar from "./SearchBar";

type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-30 bg-[url('/white-brick.jpg')] bg-cover bg-center bg-no-repeat border-b border-gray-400 shadow-sm">
      {" "}
      <nav className="w-full px-6 sm:px-12 lg:px-20 py-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-7xl font-extrabold text-[#5a5a5a] tracking-widest drop-shadow-md">
            Icons
          </h1>
        </div>
      </nav>
    </header>
  );
}
