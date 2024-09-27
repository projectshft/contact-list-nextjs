"use client";
import { useState } from "react";
import { ContactAPI } from "../data/ContactAPI";
import SearchBox from "./SearchBox";
import ContactTable from "./ContactTable";
import AddContactButton from "./AddContactButton";

const ContactList = () => {
  const [allContacts, setAllContacts] = useState(ContactAPI.all());
  const [filteredContacts, setFilteredContacts] = useState(allContacts);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredContacts(allContacts);
    } else {
      const filtered = allContacts.filter((contact) =>
        contact.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  const handleDelete = (id) => {
    ContactAPI.deleteContact(id);

    const updatedContacts = ContactAPI.all();
    setAllContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contacts</h1>

      <div className="flex flex-col items-center mb-8 gap-4">
        <AddContactButton />
        <SearchBox onSearch={handleSearch} />
      </div>

      <ContactTable contacts={filteredContacts} onDelete={handleDelete} />
    </main>
  );
};

export default ContactList;
