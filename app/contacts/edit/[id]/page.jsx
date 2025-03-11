"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ContactsAPI } from "@/app/data/contactsAPI";

export default function EditContact() {
  const { id } = useParams();
  const router = useRouter();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const contactToUpdate = ContactsAPI.get(parseInt(id, 10));
    if (contactToUpdate) {
      setContact(contactToUpdate);
      setName(contactToUpdate.name);
      setEmail(contactToUpdate.email);
      setNumber(contactToUpdate.number);
      setImageUrl(contactToUpdate.imageUrl);
    }
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImageUrl(newImageUrl);
    }
  };

  const handleSaveClick = () => {
    if (!name || !email || !number) {
      alert("There is an empty field");
      return;
    }

    const updatedContact = {
      id: parseInt(id, 10),
      name,
      email,
      number,
      imageUrl,
    };

    ContactsAPI.updateContact(updatedContact);
    router.push("/contacts");
  };

  if (!contact) {
    return <div>Sorry, no contact not found</div>;
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-5" style={{ width: "40rem", height: "28rem" }}>
        <div className="card-body text-center">
          <h2 className="card-title">Edit Contact</h2>
          <input
            type="text"
            className="form-control mb-2"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Edit Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder="Edit Phone Number"
          />
          <input
            type="email"
            className="form-control mb-2"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Edit Email"
          />
          <div className="container my-4">
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {imageUrl && (
              <img
                src={imageUrl}
                className="rounded img-fluid mt-2"
                width="100"
              />
            )}
          </div>
          <div className="container">
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-success mx-2 my-2"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="btn btn-secondary mx-2 my-2"
                onClick={() => router.push("/contacts")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
