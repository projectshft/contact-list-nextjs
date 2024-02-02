'use client';
import Link from 'next/link';
import { ContactsAPI } from '@/app/data/contactsAPI';
import { useParams } from 'react-router-dom';
import { AddContact } from '/app/contacts/new/page'

export default function Contact() {
	const { id } = useParams();
	const contact = ContactsAPI.getID(parseInt(id, 10));

	if (!contact) {
		return <div className='text-center'>
			<h1>Sorry, we could not find that contact</h1>
			<Link className='btn btn-secondary' href='/contacts'> Back</Link>
			</div>;
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