import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "../components/ContactForm";
import { contacts } from "../data";

const generateId = () => Math.round(Math.random() * 100000000);

const IndexPage = () => {
  const [currentView, setCurrentView] = useState("list");
  const [selectedContact, setSelectedContact] = useState(null);

  const handleAddContact = (newContact) => {
    newContact.id = generateId();
    contacts.push(newContact);
    setCurrentView("list");
  };

  const handleViewContact = (id) => {
    const contact = contacts.find((c) => c.id === id);
    setSelectedContact(contact);
    setCurrentView("view");
  };

  const handleBack = () => {
    setCurrentView("list");
    setSelectedContact(null);
  };

  return (
    <div>
      {currentView === "list" && (
        <ContactList contacts={contacts} onViewContact={handleViewContact} />
      )}
      {currentView === "form" && <ContactForm onSubmit={handleAddContact} />}
    </div>
  );
};

export default IndexPage;
