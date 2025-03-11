"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ContactsAPI } from "../data/contactsAPI";

export default function AddContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleAddContact = (event) => {
    event.preventDefault();

    const newContact = {
      id: Math.floor(Math.random() * 10000),
      name,
      number,
      email,
      imageUrl:
        imageUrl ||
        "https://media.istockphoto.com/id/2170242767/vector/flat-illustration-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture.jpg?s=612x612&w=0&k=20&c=fZX-n77VuWJ4jrzOUG0FRX6GxOxzHeZuc0wWQ2C549U=",
    };

    ContactsAPI.addContact(newContact);
    
    router.push("/contacts");
  };



  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "50rem" }}>
        <div className="card-body text-center">
          <h1 className="card-title">Add New Contact</h1>
          <form onSubmit={handleAddContact}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Phone Number (numbers only)"
                required
                pattern="[0-9]+"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={(event) => setImageUrl(event.target.value)}
                placeholder="Enter URL link to image"
              />
            </div>
            <button
              type="button"
              className="btn btn-danger mx-2 text-white"
              onClick={() => router.push("/contacts")}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary mx-2">
              Add Contact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
