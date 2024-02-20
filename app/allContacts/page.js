"use client";
import styles from "../page.module.css";
import { ContactsAPI } from "../contactsAPI/contactsAPI";
import Link from "next/link";

export default function AllContacts() {
  const contacts = ContactsAPI.all();
  return (
    <main>
      <div>
        <h1 style={{ textAlign: "center" }}>All Contacts</h1>
        <br />
        <br />
        <button className={styles.addButton}>
          <Link href={"/addNew"}>Add Contact</Link>
        </button>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img
                      className={styles.tableProfilePic}
                      src={contact.image_url}
                    />
                  </td>
                  <td
                    style={{ color: "blue", textDecoration: "underline" }}
                    className={styles.contactCell}
                  >
                    <Link href={`/contactView/${contact.id}`}>
                      {contact.name}
                    </Link>
                  </td>
                  <td className={styles.contactCell}>{contact.email}</td>
                  <td className={styles.contactCell}>{contact.phone_number}</td>
                </tr>
              );
            })}
          </tbody>
          <br />
        </table>
      </div>
    </main>
  );
}
