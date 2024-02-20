"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactsAPI } from "@/app/contactsAPI/contactsAPI";

export default function Contact() {
  const { id } = useParams();
  const contact = ContactsAPI.get(parseInt(id, 10));

  return (
    <main>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginTop: "100px" }}>Contact Info</h1>
        <br />
        <h2>{contact.name}</h2>
        <br />
        <img
          style={{ maxHeight: "400px", maxWidth: "400px" }}
          src={contact.image_url}
        />
        <h3>{contact.email}</h3>
        <br />
        <h3>{contact.phone_number}</h3>
        <br />
        <Link
          style={{
            color: "blue",
            textDecoration: "underline",
            fontSize: "20px",
          }}
          href="/"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
