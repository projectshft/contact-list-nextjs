import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactView from '../components/ContactView';
import ContactForm from '../components/ContactForm';
import { contacts } from '../data';

const generateId = () => Math.round(Math.random() * 100000000);

const IndexPage = () => {
  const [currentView, setCurrentView]
 = useState('list');
const [selectedContact, setSelectedContact] = useState(null);

const handleAddContact = (newContact) => {
  newContact.id = generateId();
  contacts.push(newContact);
  setCurrentView('list');
};


}