"use client";
import { contactsAPI } from "../../data/contactsAPI";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Contact() {
  const { id } = useParams();
  const contact = contactsAPI.getById(parseInt(id, 10));

  if (!contact) {
    return (
      <div className="text-danger text-center">
        Sorry, but the Contact could not be found
        <Link className="btn btn-secondary mb-2" href="/contacts">
          Back
        </Link>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <h1>Contact info</h1>
        <Link className="btn btn-secondary w-auto mb-2" href="/contacts">
          Back
        </Link>
        <h2>{contact.name}</h2>
        <img
          className="contact-image"
          src={contact.image_url}
          alt={`image of ${contact.name}`}
        />
        <span>{contact.email}</span>
        <span>{contact.phone_number}</span>
      </div>
    </div>
  );
}
