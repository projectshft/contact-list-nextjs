"use client";
import ContactListItem from "./ContactListItem";
import React from "react";

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <table className="table table-secondary table-hover text-center mt-3">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            handleDelete={handleDelete}
            singleContact={contact}
          />
        ))}
      </tbody>
    </table>
  );
};
