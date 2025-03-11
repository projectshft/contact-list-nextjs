
"use client";
import { useRouter } from "next/navigation";
import { ContactsAPI } from "../data/contactsAPI";

export default function ContactCard({ contact }) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/contacts/edit/${contact.id}`);
  };

  const handleDeleteClick = () => {
    if (confirm(`Are you sure you want to delete ${contact.name}?`)) {
      ContactsAPI.deleteContact(contact.id);
      router.push("/contacts");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-5" style={{ width: "40rem", height: "40rem" }}>
        <div className="card-body text-center">
          <h1 className="card-title">{contact.name} </h1>
          <img
            src={contact.imageUrl}
            className="rounded img-fluid "
            style={{ width: 450, height: 350 }}
          />
          <p className="card-text">
            Phone Number: <strong>{contact.number}</strong>
          </p>
          <p className="card-text">
            Email address: <strong>{contact.email}</strong>
          </p>
          <p>ID#: {contact.id}</p>
          <button className="btn btn-primary mx-2" onClick={handleEditClick}>
            Edit
          </button>
          <button className="btn btn-danger mx-2" onClick={handleDeleteClick}>
            Delete
          </button>
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={() => router.push("/contacts")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
