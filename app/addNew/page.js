"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import { ContactsAPI } from "../contactsAPI/contactsAPI";
import PropTypes from "prop-types";

AddNew.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
};

export default function AddNew() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image_url, setimage_url] = useState("");
  const [phone_number, setphone_number] = useState("");

  const handleSubmitAddContactClick = () => {
    const generateId = () => Math.round(Math.random() * 100000000);
    const contactId = generateId();

    ContactsAPI.addContact({
      id: contactId,
      name,
      email,
      phone_number,
      image_url,
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.contactForm}>
        <h1>Add New Contact</h1>
        <form>
          <label>Name</label>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label>Image URL</label>
          <br />
          <input
            className={styles.input}
            type="text"
            placeholder="Enter image url"
            value={image_url}
            onChange={(event) => setimage_url(event.target.value)}
          />
          <br />
          <label>Phone Number</label>
          <br />
          <input
            className={styles.input}
            type="tel"
            placeholder="Enter phone number"
            value={phone_number}
            onChange={(event) => setphone_number(event.target.value)}
          />
        </form>
        <br />

        <button
          type="button"
          className={styles.addContactBtn}
          onClick={handleSubmitAddContactClick}
        >
          <Link href={"/"}>Add Contact</Link>
        </button>
        <br />
        <Link
          style={{
            color: "blue",
            textDecoration: "underline",
            fontSize: "17px",
          }}
          href="/"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
