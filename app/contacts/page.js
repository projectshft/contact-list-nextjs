"use client";
import { contactsAPI } from "@/app/data/contactsAPI";
import ContactSearchBar from "../components/ContactSearchBar";
import { ContactList } from "../components/ContactList";
import Link from "next/link";
import { useState } from "react";
export default function Contacts() {
  const [allContacts, setAllContacts] = useState(contactsAPI.getAll());
  const [searchedContact, setSearchedContact] = useState(allContacts);

  const contactSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      // If the search term is empty or contains only whitespace
      setSearchedContact(allContacts);
    } else {
      const filteredContact = allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedContact(filteredContact);
    }
  };

  const handleDelete = (id) => {
    const newContacts = allContacts.filter((contact) => contact !== id);
    setAllContacts(newContacts);
    contactsAPI.deleteContact(id);
  };

  return (
    <div className="container mt-4 text-center">
      <h1 className="display-3 text-center mb-2">All Contacts</h1>
      <Link href="/contacts/new" className=" mb-2 btn btn-primary">
        Add Contact
      </Link>
      <ContactSearchBar onSearchTermChange={contactSearch} />
      <ContactList handleDelete={handleDelete} contacts={searchedContact} />
    </div>
  );
}
