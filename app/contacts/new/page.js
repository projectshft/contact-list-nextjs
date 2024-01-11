"use client";
import { contactsAPI } from "@/app/data/contactsAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { generateId } from "../../utils/utils";

export default function AddContactForm() {
  //state for all form items that make up contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [phone_number, setPhoneNumber] = useState(0);
  const router = useRouter();

  // function to add states to object and push to api (handled in contactApi )
  // on change set state for form items
  const handleClick = () => {
    const id = generateId();
    contactsAPI.addContact({ id, name, email, image_url, phone_number });

    router.push("/contacts");
  };

  return (
    <section className="container w-50 mt-4">
      <h1 className="text-center">Add New Contact</h1>
      <Link href="/" className="btn btn-secondary mb-2">
        Back
      </Link>

      <form className="contact-form text-center">
        <div className="form-group">
          <div className="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Image Url</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
              onChange={(e) => setPhoneNumber(parseInt(e.target.value, 10))}
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          ADD NEW CONTACT
        </button>
        <hr />
      </form>
    </section>
  );
}
