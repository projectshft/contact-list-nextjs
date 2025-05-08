import React from "react";
import Header from "@components/Header";
import SearchBar from "@components/SearchBar";
import { contacts } from "@SeedData/contacts";

export default function SearchContacts() {
  return (
    <>
      <Header />
      <h2>Search Contacts</h2>
      <SearchBar contacts={contacts as any} />
    </>
  );
}
