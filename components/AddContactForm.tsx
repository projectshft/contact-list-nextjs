"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useContacts } from "context/ContactsContext";
import Header from "./Header";

type Contact = {
  name: string;
  url: string;
  email: string;
  phone: string;
};

export default function AddContactForm() {
  const { addContact } = useContacts();
  const [inputName, setInputName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const router = useRouter();

  const handleClickAdd = () => {
    const newContact: Contact = {
      name: inputName,
      url: inputUrl,
      email: inputEmail,
      phone: inputPhone,
    };

    if (!inputName || !inputUrl || !inputEmail || !inputPhone) {
      alert("Please fill out all fields.");
      return;
    }

    addContact(newContact);
    router.push("/");
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen text-[#5a5a5a] px-6">
        <div className="flex flex-col gap-4 max-w-md w-full">
          <h2 className="text-4xl font-bold mb-6">Add New Contact</h2>

          <div className="flex flex-col gap-4 max-w-md">
            <label className="font-medium">Name</label>
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Contact name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />

            <label className="font-medium">Picture URL</label>
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Contact image URL"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
            />

            <label className="font-medium">Email</label>
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Contact email"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />

            <label className="font-medium">Phone</label>
            <input
              className="border border-gray-300 rounded px-4 py-2"
              placeholder="Contact phone"
              value={inputPhone}
              onChange={(e) => setInputPhone(e.target.value)}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              label="Add Contact"
              onClick={handleClickAdd}
              width="w-[200px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
