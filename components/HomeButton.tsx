"use client";
import React from "react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="text-[#444] pb-[50px] underline underline-offset-4 hover:text-black hover:decoration-2 transition-all duration-150"
      style={{ cursor: "url('/home.cur') 0 0, pointer" }}>
      Home
    </Link>
  );
}
