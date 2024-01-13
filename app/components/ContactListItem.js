"use client";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function ContactListItem({ singleContact, handleDelete }) {
  const { id, name, image_url, email, phone_number } = singleContact;

  return (
    <tr>
      <td>
        <img
          style={{ width: "65px" }}
          className="rounded-circle"
          src={image_url}
          alt={`image of ${name}`}
        />
      </td>
      <td>
        <Link
          className="text-info text-decoration-underline"
          href={`/contacts/${id}`}
        >
          {name}
        </Link>
      </td>
      <td>
        <span>{email}</span>
      </td>
      <td>
        <span>{phone_number}</span>
      </td>
      <td>
        <Link className="text-info text-decoration-underline" href="/">
          Edit
        </Link>
      </td>
      <td>
        <button
          className=" btn btn-danger  text-decoration-underline"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
//expected format for an individual contact.  If any props passed into the ContactListItem component are not following the below format it will warn the developer in the console
ContactListItem.propTypes = {
  singleContact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.number.isRequired,
  }),
};
