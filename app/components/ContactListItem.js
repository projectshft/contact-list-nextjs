"use client";
import React from "react";
import Link from "next/link";
//receive props declare propTypes
export default function ContactListItem({ singleContact }) {
  // console.log(singleContact);
  const { id, name, image_url, email, phone_number } = singleContact;

  return (
  
  <tr>
  <td>
    <img style={{ width: "65px" }} className="rounded-circle" src={image_url} alt="" />
  </td>
  <td>
    <Link  className="text-info text-decoration-underline" href="/">{name}</Link>
  </td>
  <td>
    <span>{email}</span>
  </td>
  <td>
    <span>{phone_number}</span>
  </td>
  <td><Link className="text-info text-decoration-underline" href="/">Edit</Link></td>
</tr>
      
  )
}


