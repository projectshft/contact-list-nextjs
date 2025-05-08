"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-4 pb-[50px] px-[50px] border-t border-gray-300 mt-10 flex justify-center text-[#5a5a5a]">
      <div className="flex flex-col items-center gap-y-1 text-sm text-[#5a5a5a]">
        <p className="text-sm">© 2025 Mutsumi Hata</p>
        <p className="text-sm text-[#b0b0b0] text-center">
          Background image by topntp26 from Freepik
        </p>
      </div>
    </footer>
  );
}
