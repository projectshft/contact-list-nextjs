"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";

type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

type Props = {
  contacts: Contact[];
};

export default function SearchBar({ contacts }: Props) {
  const [input, setInput] = React.useState("");
  const [filteredData, setFilteredData] = React.useState<Contact[]>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    const foundContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );

    if (input.trim() === "") {
      alert("Please enter a name.");
    } else if (foundContacts.length === 0) {
      alert("No matching contact.");
    } else {
      setFilteredData(foundContacts);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center mb-8 justify-center">
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded w-[350px] text-sm text-[#5a5a5a]"
          placeholder="Search by name"
          onChange={handleSearchInput}
        />
        <Button
          label="Search"
          onClick={handleSearchClick}
          width="w-[150px]" // or adjust to fit nicely
        />

        {/* <button className="w-[200px] py-2 bg-gray-300 text-[#444] rounded-xl hover:bg-gray-400 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-200"> */}

        {/* <button
          className="px-4 py-2 text-base shadow-xl text-[#444] bg-gray-300 rounded-xl hover:bg-gray-300"
          onClick={handleSearchClick}>
          Search
        </button> */}
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredData.map((contact) => (
          <div
            key={contact.name}
            className="bg-white p-4 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-2 text-[#5a5a5a]">
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image
                  src={contact.url}
                  alt={contact.name}
                  width={60}
                  height={60}
                  className="object-cover w-[60px] h-[60px]"
                />
              </div>
              <p className="text-lg font-semibold">{contact.name}</p>
            </div>
            <p className="text-sm">{contact.email}</p>
            <p className="text-sm">{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
