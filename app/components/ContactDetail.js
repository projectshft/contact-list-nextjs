"use client";
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

export default function ContactDetail ({ singleContact, handleDelete }) {
  const { id, name, image_url, email, phone_number } = singleContact;

  return (
    <tr>
      <td>
        <img
          style={{ width: '25px' }}
          className="rounded-circle"
          src={image_url}
          alt={``}
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

ContactDetail.propTypes = {
  singleContact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.number.isRequired,
  }),
};