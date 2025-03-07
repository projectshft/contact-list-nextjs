import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function ContactList ({ contacts }) {

  return (
    <div className="d-flex justify-content-center mt-3 text-center">
      <div className="w-75">
        <table className="table table-striped mt-3">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Profile Pic</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Edit</th>
              <th className="border p-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="bg-gray-50">
                <td className="border p-3 text-center">
                  <img
                    src={contact.image}
                    className="rounded-circle"
                    width={60}
                    height={60}
                    alt={contact.name}
                  />
                </td>
                <td className="border p-3 align-middle">
                  <Link href={`contacts/${contact.id}`}>{contact.name}</Link>
                </td>
                <td className="border p-3 align-middle">{contact.email}</td>
                <td className="border p-3 align-middle">{contact.phone}</td>
                <td className="border p-3 align-middle">
                  <Link href={`contacts/${contact.id}`}>Edit</Link>
                </td>
                <td className="border p-3 align-middle">
                  <Link href={`contacts/${contact.id}`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};