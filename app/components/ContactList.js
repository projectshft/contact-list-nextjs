import React from "react";
import PropType from "prop-type";
import Link from 'next/link';

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h1>Contact List</h1>
            <ul>
                {contacts.map((contact) => (
                    <li key = {contact.id}>
                        <link href={`/contacts/${contact.id}`}>
                        {contact.name} - {contact.email} - {contact.phone}
                    </li>
                ))}
            </ul>
            <link href="/contact/new"
        </div>
    );
};

ContactList.propTypes = {
    contacts: PropType.array.isRequired,
};

export default ContactList;