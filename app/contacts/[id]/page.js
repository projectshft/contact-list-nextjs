"use client";
import { useContacts, setContacts } from "@/app/contexts/ContactsContext";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

const ContactDetail = () => {
  const [showDetail, setShowDetail] = useState(true);
  const [showEditDetail, setShowEditDetail] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const { contacts, setContacts } = useContacts();
  const { id } = useParams();
  const idNum = Number(id);
  const router = useRouter();

  const contact = contacts.find((contact) => contact.id === idNum);

  const updateContact = (e) => {
    e.preventDefault();

    setContacts(
      contacts.map((contact) =>
        contact.id === idNum
          ? { id: idNum, name, email, phone, image }
          : contact
      )
    );

    setShowDetail(true);
    setShowEditDetail(false);
  };

  const deleteContact = () => {
    const updatedContacts = contacts.filter(
      (checkContact) => checkContact !== contact
    );
    setContacts(updatedContacts); // Update the context/state

    router.push("/contacts");
  };

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setImage(contact.image);
    }
  }, [contact]);

  if (!contacts.find((contact) => contact.id === idNum)) {
    return (
      <div>
        <h2>No contact matches ID: {id}</h2>
        <Link href="/contacts">
          <button>Back to Contacts</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {showDetail && (
        <div class="contact-card-container">
          <div className="contact-card">
            {image && <img src={image} />}
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <button
              onClick={() => {
                setShowDetail(false);
                setShowEditDetail(true);
              }}
            >
              Edit Contact
            </button>
            <button onClick={deleteContact}>Delete</button>
            <Link href="/">
              <button className="back-to-list">Back to Contacts</button>
            </Link>
          </div>
        </div>
      )}

      {showEditDetail && (
        <div className="contact-edit">
          <h1 className="title">Edit Contact</h1>
          <form onSubmit={updateContact}>
            <div className="form-input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Phone Number"
                value={phone}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label for="image-url">Image URL</label>
              <input
                type="url"
                id="image-url"
                placeholder="Enter Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactDetail;
