'use client';
import { ContactsAPI } from '../../data/contactsAPI';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddContact() {
	const [name, setName] = useState('');
	const [image_url, setImageUrl] = useState('');
	const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
	const router = useRouter();

	const handleSubmitContactClick = () => {
	 	const generateId = () => Math.round(Math.random() * 100000000);
		const id = generateId(); 
		
		ContactsAPI.addContact({
			id,
      name,
			image_url,
      email,
			phone_number
		});
    setName('');
    setImageUrl('');
    setEmail('');
    setPhoneNumber('');
		router.push('/contacts');
	};

	return (
		<div>
			<form>
				<label>Name</label>
				<input
					type='text'
					className='form-control'
          placeholder='Name'
          value={name}
					onChange={(event) => setName(event.target.value)}
          required
				/>

				<br />

				<label>Image</label>
        <input
					type='text'
					className='form-control'
          placeholder='Image URL'
          value={image_url}
					onChange={(event) => setImageUrl(event.target.value)}
          required
        />

				<br />

				<label>Email</label>
        <input
					type='text'
					className='form-control'
          placeholder='Email Address'
          value={email}
					onChange={(event) => setEmail(event.target.value)}
          required
        />
        	<br />

        <label>Phone Number</label>
        <input
          type='text'
          className='form-control'
          placeholder='Phone Number'
          value={phone_number}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
/>


				<button type='button' onClick={handleSubmitContactClick}>
					Add New Contact
				</button>
			</form>

		</div>
	);
}