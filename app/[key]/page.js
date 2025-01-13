// app/[id]/page.js
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactsAPI } from "../data/contactAPI";
import styles from '../page.module.css'
import { useState, useEffect } from "react";


 
export default function ContactCard() {
  const params = useParams();
  const id = params.key;

  const [isLoading, setIsLoading] = useState(true);
  const [contact, setContact] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedContact = ContactsAPI.get(parseInt(id, 10));
      
        if (fetchedContact) {
          setContact(fetchedContact);
        } else {
          setError("Contact not found.");
        }
      } catch (err) {
        setError("Failed to fetch contact.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

      if (isLoading) {
        return <div>Loading...</div>
      }

      if (error){
        return<div>{error}</div>
      }
  
    return contact ? (
      <div className={styles.page}>
       <div class="card" width="5rem;" className="mt-5 text-center">
        <img class="img-fluid" max-width="400px" max-height="400px" src={contact.picture} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title mt-1">{contact.name}</h5>
        </div>
        <ul className="text-center">
          <li className="list-group-item">{contact.number}</li>
          <li className="list-group-item">{contact.email}</li>
        </ul>
        <div class="card-body">
          <a href="/" className="badge badge-dark">Back to Contacts</a>
        </div>
  </div>
</div>
    ) : (
      <div className={styles.main}>Contact Not Found</div>
    ); 
    }
  
  






