"use client";
import { useParams } from "next/navigation";
import { ContactsAPI } from "@/app/data/contactsAPI";
import ContactCard from "@/app/components/ContactCard";

export default function ContactDetail() {
  const { id } = useParams();
  const contact = ContactsAPI.get(parseInt(id, 10));

  if (!contact) {
    return <div className="text-center">Sorry, contact not found.</div>;
  }

  return <ContactCard contact={contact} />;
}
