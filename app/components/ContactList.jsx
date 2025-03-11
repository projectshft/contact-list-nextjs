"use client";
import { ContactsAPI } from "../data/contactsAPI";
import { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function ContactList() {
  const [contactList, setContactList] = useState(ContactsAPI.getAll());
  const [searchedContacts, setSearchedContacts] = useState(contactList);

  const handleSearch = (query) => {
    if (!query) {
      setSearchedContacts(contactList);
    } else {
      setSearchedContacts(
        contactList.filter((contact) =>
          contact.name.toLowerCase().includes(query)
        )
      );
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmDelete) {
      ContactsAPI.deleteContact(id);
      
      const updatedContacts = ContactsAPI.getAll();
      setContactList(updatedContacts);
      setSearchedContacts(updatedContacts);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      <div className="container mt-4">
        <div className="container ">
          <div className="my-4">
            <Link href="/contacts/new" className="btn btn-primary">
              Add Contact
            </Link>
            <Link href="/.." className="btn btn-secondary ms-2">
              Back
            </Link>
          </div>
        </div>
        <ul className="list-group">
          {searchedContacts.map(({ id, imageUrl, name, email, number }) => (
            <li
              key={id}
              className="list-group-item d-flex align-items-center justify-content-between"
            >
              <div className="d-flex align-items-center">
                <img
                  src={
                    imageUrl
                      ? imageUrl
                      : "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U="
                  }
                  alt="profile"
                  className="rounded-circle me-3"
                  style={{ width: 50, height: 50 }}
                />
                <div>
                  <Link
                    href={`/contacts/${id}`}
                    className="text-primary text-decoration-none fw-bold"
                  >
                    {name}
                  </Link>
                  <div>{email}</div>
                  <div>{number}</div>
                </div>
              </div>
              <div>
                <Link
                  href={`/contacts/edit/${id}`}
                  className="btn btn-primary mx-2 btn-sm"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm mx-2"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
