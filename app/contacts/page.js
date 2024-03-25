'use client'
import React, { useState } from "react";
import Link from "next/link";
import { contacts } from "../Data/page";
import AllContactList from "@/components/AllContactsList";
import SearchBar from "@/components/SearchBar";
import Individual from "./[name]/page";
import AddContactsButton from "@/components/AddContactsButton";

export default function AllContacts() {

  return (
    <>
      <h2>All Contacts</h2>

      <Link className='routes' href='/new'>
        <AddContactsButton />
      </Link>

      <SearchBar contacts={contacts} />
      
      <AllContactList contacts={contacts} />
    </>
  );
};