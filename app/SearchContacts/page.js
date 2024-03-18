'use client'
import React from "react";
import Header from "../Header/page";
import SearchBar from "../SearchBar/page";

export default function SearchContacts({ contacts }) {
  

  return (
    <>
      <Header />
      <h2>Search Contacts</h2>
      <SearchBar />
    </>
  );
};