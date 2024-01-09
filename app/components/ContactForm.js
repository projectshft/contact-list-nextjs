import React, { useState } from "react";

const ContactForm = ({ onAddContacty }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState{''};
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, email, phone };
        onAddContacty(newContact);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
            <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
            </form>
        </div>
    )
}