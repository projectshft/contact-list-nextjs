'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ContactsAPI } from '../../data/contactsAPI';

export default function Contact() {
	const { id } = useParams();
	const contact = ContactsAPI.get(parseInt(id, 10));

	if (!contact) {
		return <div>Sorry, we could not find that contact</div>;
	}

	return (
		<main>
			<div>
				<h1>
					{contact.name}
				</h1>
				<img className='contact-image' src={contact.image_url} />
				<h2>{contact.email}</h2>
				<h2>{contact.phone_number}</h2>
			</div>
		</main>
	);
}