"use client";
import { contactsAPI } from "@/app/data/contactsAPI";
import ContactSearchBar from "../components/ContactSearchBar";
// import ContactList from "../components/ContactList";
import Link from "next/link";
import { useState } from "react";
export default function Contacts() {
  const [allContacts, _] = useState(contactsAPI.getAll());
  console.log(allContacts);
  return (
    <div>
      <h1>All Contacts</h1>
      <Link href="/contacts/new" className="btn btn-primary">
        Add Contact
      </Link>
      <ContactSearchBar />
      {/* <ContactList /> */}
    </div>
  );
}
