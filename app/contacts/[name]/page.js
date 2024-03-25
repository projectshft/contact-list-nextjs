'use client';
import React from "react";
import { useParams } from "next/navigation";
// import { useRouter } from 'next/router';
import { contacts } from "@/app/Data/page";

export default function Individual() {
  const rawName = useParams();

  console.log(contacts);
  console.log(rawName);
  let stringedName = rawName['name'];
  console.log(stringedName);
  const decodedName = stringedName.replace('%3A', '').replace('%20', ' ');
  console.log(decodedName);

  const individualContact = contacts.find((contact) => contact.name.toLowerCase() === decodedName.toLowerCase());
  
  console.log(individualContact);


  return (
    <>
      <h2>Contact Page</h2>


    {individualContact ? (
          <div className='contact-data' key={individualContact.name}>

            <div className='contact-data-url'>
              <img className='contact-individual-data-url' src={individualContact.url} alt={individualContact.name} />
            </div>

            <div className='contact-data-info-container'>
              <p className='contact-data-info'>{individualContact.name}</p>
              <p className='contact-data-info'>{individualContact.email}</p>
              <p className='contact-data-info'>{individualContact.phone}</p>
            </div>
          </div>
        ) : (
          <p>BYE</p>
        )
    }
    </>
  );
};