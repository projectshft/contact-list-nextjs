"use client";
import { contactsAPI } from "@/app/data/contactsAPI";
import ContactSearchBar from "../components/ContactSearchBar";
import { ContactList } from "../components/ContactList";
import Link from "next/link";
import { useState } from "react";
export default function Contacts() {
  const [allContacts, _] = useState(contactsAPI.getAll());
  //
  return (
    <div className="container mt-4 text-center">
      <h1 className="display-3 text-center mb-2">All Contacts</h1>
      <Link href="/contacts/new" className=" mb-2 btn btn-primary">
        Add Contact
      </Link>
      <ContactSearchBar />
      <ContactList contacts={allContacts} />
    </div>
  );
}
