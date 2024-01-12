"use client";
import { useState } from "react";
import { contactsAPI } from "../data/contactsAPI";
import ContactListItem from "./ContactListItem";
import React from "react";

export const ContactList = ({ contacts }) => {
  console.log(contacts);
  return (
    <table className="table table-secondary table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactListItem key={contact.id} singleContact={contact} />
        ))}
      </tbody>
    </table>
  );
};
