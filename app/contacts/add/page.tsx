"use client";
import React, { useState } from "react";
import AddContactForm from "@components/AddContactForm";
import { contacts as seedContacts } from "@SeedData/contacts";
import Button from "@components/Button";

export default function Page() {
  const [contacts, setContacts] = useState(seedContacts);

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
    console.log("Added:", newContact);
  };

  return (
    <>
      <div className="flex justify-center">
        <AddContactForm />
      </div>
    </>
  );
}
