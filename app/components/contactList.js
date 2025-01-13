'use client'
import { ContactsAPI } from "../data/contactAPI";
import { useState } from "react";

import Link from "next/link";


export default function Contacts(){
  const [allContacts, _] = useState(ContactsAPI.all());

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
      {allContacts.map((c) => {
        return (
          <tr key={c.number} className="align-middle">
            <td>
              <img width="75px" height="75px" border-radius="50%" className="rounded"
                src={c.picture}
                alt="profile pic"></img>
            </td>
            <td>
              <Link href={`/${c.number}`}>{c.name}</Link>
            </td>
            <td>
              {c.number}
            </td>
            <td>
              {c.email}
            </td>
          </tr>
        );
      })}
      </tbody>
    </table> 
  );
}

