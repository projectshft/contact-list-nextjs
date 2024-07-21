'use client';
import 'app/components/contact.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { contactData } from 'app/data/contactData';
import PropTypes from 'prop-types'

export default function NewContact() {
	const handleClick = () => {
		router.push('/')
	};

  const generateId = () => Math.round(Math.random() * 100000000);

  const id = generateId()

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
	const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
	const router = useRouter();

 NewContact.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
    email: PropTypes.string
  }

  const handleSubmitContactClick = () => {

    contactData.addContact ({
      id,
      photo,
      name,
      number,
      email
    })

		router.push('/');
  }; 

  return (
    <div>
      <h1 className='text-center'>Create New Contact</h1>
    <form className='text-center'>
				<label>Photo Link</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter photo url'
					onChange={(event) => setPhoto(event.target.value)}
				/>

				<br />

				<label>Name</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter name'
					onChange={(event) => setName(event.target.value)}
				/>

				<br />

				<label>Phone Number</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter phone number'
					onChange={(event) =>
						setNumber(event.target.value)
					}
				/>

				<br />

				<label>Email</label>
				<input
					type='text'
					className='form-control'
          placeholder='Enter email'
					onChange={(event) => setEmail(event.target.value)}
				/>

        <br />

				<button type='button' className='button' onClick={handleSubmitContactClick}>
					Add New Contact
				</button>
			</form>

      <br />
		<div>
    	<button className='back-button' onClick={handleClick}>Back</button>
		</div>
  </div>	
	)

}
  