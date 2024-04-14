"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactsAPI } from "../../data/contacts-api";
import { useRouter } from "next/navigation";
import React from "react";

/**
 * Destructure 'id' from useParams object.
 * Use 'id' in the get method of ContactsAPI get method.
 * @returns data to be rendered for the single selected contact.
 */
export default function Contact(): JSX.Element {
  const { id } = useParams();
  const router = useRouter();

  let contact;
  if (typeof id === "string") {
    contact = ContactsAPI.get(parseInt(id, 10));
  } else {
    console.error("Unexpected type for 'id'");
  }

  if (!contact) {
    return <div>Sorry, we could not find that contact</div>;
  }

  // Function to handle the deletion of a contact
  const handleDelete = () => {
    ContactsAPI.delete(contact);
    router.push("../");
  };

  return (
    <main>
      <div className="text-center">
        <h1 className="contactInfoHeader">Contact Info</h1>
        <h2>{contact.name}</h2>
        <img src={contact.imgURL} alt="Profile Picture"></img>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <br />
        <Link href={"../"}>Back</Link>
      </div>
    </main>
  );
}
