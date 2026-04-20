'use client';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ContactAPI } from '@/app/data/contactsAPI';

const defaultImage =
  'https://wallpapersok.com/images/hd/angel-default-pfp-a1ur2igijuw6g02n.jpg';

export default function AddNewContact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    image: defaultImage,
    phoneNumber: '',
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(defaultImage);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const generateUniqueId = () => Math.round(Math.random() * 100000000);
  // const generateUniqueId = crypto.randomUUID();

  const handleSubmit = () => {
    if (!name || !email || !image || !phoneNumber) {
      alert('Please fill out all fields!');
      return;
    }

    // const uniqueId = crypto.randomUUID();
    const uniqueId = generateUniqueId();

    // console.log(uniqueId);



    try {
      ContactAPI.addContact({
        name,
        email,
        image,
        phoneNumber,
        uniqueId,
      });
      router.push('/');
    } catch (error) {
      console.error('Problem adding new contact: ', error);
      alert('There was an error. Please try again.');
    }
  };

  return (
    <Container>
      <form>
        <label>Enter Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setName(event.target.value)}
        />

        <br />

        <label>Enter Email</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setEmail(event.target.value)}
        />

        <br />

        <label>Enter Image URL</label>
        <input
          type="text"
          className="form-control"
          placeholder="* Optional *"
          onChange={(event) => setImage(event.target.value || defaultImage)}
        />

        <br />

        <label>Enter Phone Number</label>
        <input
          type="text"
          className="form-control"
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <br />

        <Button onClick={handleSubmit}>ADD NEW CONTACT</Button>
      </form>

      <br />

      <Link href="/">Back</Link>
    </Container>
  );
}
