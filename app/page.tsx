"use client";
import { useState } from "react";
import { ContactsAPI } from "./data/contacts-api";
import PrintHeader from "./components/printHeader";
import PrintContacts from "./components/printContacts";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import React from "react";

export default function Home(): JSX.Element {
  // uses .all method of Contacts API to retrieve list of all contacts.
  const [allContacts, _] = useState(ContactsAPI.all());
  if (allContacts.length === 0) {
    return <PrintHeader />;
  }

  return (
    <main>
      <div className="container">
        <PrintHeader />
        <PrintContacts allContacts={allContacts} />
      </div>
    </main>
  );
}
