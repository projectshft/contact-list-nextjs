import React from "react";
import Link from "next/link";

export default function AddContactsButton() {
  return (
    <Link href="/contacts/add">
      <button className="w-[200px] py-4 bg-gray-300 text-[#444] rounded-xl hover:bg-gray-400 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-200">
        + Add Contact
      </button>
    </Link>
  );
}
