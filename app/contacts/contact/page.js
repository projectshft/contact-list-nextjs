'use client'
import Data from "@/app/Data/page";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css'



export default function Contact(prop) {
  const id = JSON.parse(prop.searchParams.id)

  const contact = Data.get(id)

  if (!contact) {
    return (
      <div className="text-center">
        <h1>Error: Contact Not Found</h1>
        <Link href={'/contacts'}>Back</Link>
      </div>
    )
  } else {
    return (
      <div className="text-center">
        <h1>Contact Info</h1>
        <Link href={'/contacts'}>Back</Link>
        <h1>{contact.name}</h1>
        <Image src={contact.image_url} alt="Profile Picture" height={300} width={300} />
        <h1>{contact.email}</h1>
        <h1>{contact.phone_number}</h1>
      </div>
    )
  }
}