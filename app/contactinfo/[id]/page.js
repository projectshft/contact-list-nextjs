'use client';
import 'app/components/contact.css'
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { contactData } from 'app/data/contactData';

export default function Player() {
	const { id } = useParams();
	const contact = contactData.get(parseInt(id, 10));
  const router = useRouter();

  const handleClick = () => {
    router.push('/')
	};

	if (!contact) {
		return <div>Sorry, but the contact was not found</div>;
	}

	return (
		<main>
			<div>
        <h1 className='text-center'>Contact Info</h1>
				<h4 className='text-center'>
					{contact.name}
        </h4>
        <div>
           <img className='contact-photo' src={contact.photo}   alt='contact photo'/>
        </div>
        <div>
          <p className='text-center'>{contact.number}</p>
        </div>
        <div>
          <p className='text-center'>{contact.email}</p>
        </div>
        
				<button className='back-button' onClick={handleClick}>Back</button>
			</div>
		</main>
	);
}