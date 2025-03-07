'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactAPI } from '../../data/ContactAPI';

export default function Contact() {
	const { id } = useParams();
	const contact = ContactAPI.get(parseInt(id, 10));

	if (!contact) {
		return (
			<>
				<div className='text-center mt-4'>
					<div>Sorry, but the contact was not found</div>
					<Link href='/contacts' className='text-blue-500 hover:underline'>Back</Link>
				</div>
			</>
		);
	}

	return (
		<main className='flex items-center justify-center min-h-screen'>
			<div className='text-center'>
        <h1 className='text-2xl font-bold mt-4'>Contact Info</h1>
        <Link href='/contacts' className='text-blue-500 hover:underline'>Back</Link>
				<h2 className='text-xl font-semibold mt-4'>{contact.name}</h2>
        <img 
					src={contact.image}
					alt={contact.name} 
					width={500} 
					height={500} 
					className='w-24 h-24 rounded-full mx-auto mt-4'
				/>
				<h5 className='text-lg mt-2'>{contact.email}</h5>
				<h5 className='text-lg'>{contact.phone}</h5>
			</div>
		</main>
	);
}