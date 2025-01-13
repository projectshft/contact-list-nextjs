"use client";
import { ContactsAPI } from "../data/contactAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PropTypes from 'prop-types';
import Link from "next/link";

function AddContact() {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const router = useRouter();

  const handleAddNewContactClick = () => {
    ContactsAPI.addContact({
      picture,
      name,
      number,
      email,
    });
    router.push('/')
  };

  return (
    <div className="row">
      <h1 className="text-center text-secondary">Add New Contact</h1>
      <div className="col"></div>
      <div className="col justify-content-center">
        <form>
          <label>Picture URL</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => setPicture(event.target.value)}
            placeholder="Contact Profile Pic URL"
          />
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
            placeholder="Johnny Appleseed"
          />

          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setNumber(event.target.value)}
            placeholder="11231231234"
          />

          <label>Email Address</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johnny@appleseed.com"
          />
          <button
            className="mt-3 rounded btn-secondary float-left"
            type="button"
            onClick={handleAddNewContactClick}>
            Enter Contact
          </button>
          <Link className="mt-3 float-right badge badge-secondary" href="/">
            Cancel
          </Link>
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
}

AddContact.proptypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default AddContact