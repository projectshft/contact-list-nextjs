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
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState(null);
  const router = useRouter();

  // function to add states to object and push to api (handled in contactApi )
  // on change set state for form items
  const validateContact = (name, email, image_url, phone_number) => {
    // added trim to make sure a user did not accidently add spaces after imput don't have to trim number due to being unable to add spaces because of the number type
    name.trim();
    email.trim();
    image_url.trim();

    if (!name || !email || !image_url || !phone_number) {
      setErrors("please make sure all fields are not empty");
      return false;
    } else if (!email.includes("@")) {
      setErrors("please make sure you are using a valid email");
      return false;
    } else if (phone_number.length !== 10) {
      setErrors(
        "please enter a 10 digit number with no special characters ex: 1234567890"
      );
      return false;
    }
    return true;
  };

  const handleClick = () => {
    const id = generateId();
    if (validateContact(name, email, image_url, phone_number)) {
      setErrors(null);
      contactsAPI.addContact({ id, name, email, image_url, phone_number });
      setName("");
      setEmail("");
      setImageUrl("");
      setPhoneNumber("");
    }

    console.log(contactsAPI.getAll());

    // router.push("/contacts");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Image Url</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Image Url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          ADD NEW CONTACT
        </button>
        <hr />
      </form>
      {errors && <div className="text-danger">{errors}</div>}
    </section>
  );
}
