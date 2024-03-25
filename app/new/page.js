'use client';
import React, { useState } from "react";
import Header from "../../components/Header";
import AddContactsBar from "@/components/AddContactsBar";
import { contacts } from "../Data/page";

export default function AddContacts() {



  return (
    <>
      <h2>Add Contacts</h2>
      <AddContactsBar contacts={contacts} />
    </>
  )
}