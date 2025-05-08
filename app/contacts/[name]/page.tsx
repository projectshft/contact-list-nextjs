"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Contact, contacts } from "../../../SeedData/contacts";

export default function Individual() {
  interface Params {
    name?: string;
  }

  const rawName: Params = useParams();
  let stringedName: string = rawName["name"] ?? "";
  const decodedName: string = decodeURIComponent(stringedName);
  const individualContact: Contact | undefined = contacts.find(
    (contact) => contact.name.toLowerCase() === decodedName.toLowerCase()
  );

  return (
    <>
      <h2>Contact Page</h2>

      {individualContact ? (
        <div className="contact-individual" key={individualContact.name}>
          <Image
            className="contact-individual-url"
            src={individualContact.url}
            alt={individualContact.name}
            width={150}
            height={150}
          />
          <div className="contact-individual-data">
            <p className="contact-individual-data">{individualContact.name}</p>
            <p className="contact-individual-data">{individualContact.email}</p>
            <p className="contact-individual-data">{individualContact.phone}</p>
          </div>
        </div>
      ) : (
        <p>Contact Not Found</p>
      )}
    </>
  );
}
