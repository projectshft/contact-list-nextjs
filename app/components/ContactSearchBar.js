"use client";
import { useState } from "react";
export default function ContactSearchBar({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        className="form-control my-2  text-center"
        type="text"
        placeholder="Search By Name"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchTermChange(searchTerm);
        }}
      />
    </div>
  );
}
