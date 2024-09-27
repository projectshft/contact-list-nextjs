"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ContactAPI } from "@/app/data/ContactAPI";
import { formatPhoneNumber } from "@/app/utils/formatPhoneNumber";

const ContactDetails = () => {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));

  if (!contact) {
    return (
      <div className="text-xl flex justify-center p-4">
        Sorry, this contact was not found.
      </div>
    );
  }

  return (
    <main>
      <div className="flex flex-col items-center my-8 gap-2">
        <Image
          src={contact.imageURL || "/avatar-placeholder.png"}
          alt={contact.name}
          className="w-32 h-32 rounded-full"
          width={100}
          height={100}
        />
        <h1>{contact.name}</h1>
        <p>{contact.email}</p>
        <p>{formatPhoneNumber(contact.phoneNum)}</p>
        <Link href="/contacts">
          <button className="bg-blue-500 text-white p-2 rounded text-sm my-2">Back to Contacts</button>
        </Link>
      </div>
    </main>
  );
};

export default ContactDetails;
