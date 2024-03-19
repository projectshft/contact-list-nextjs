'use client';
import React, { useState } from "react";

interface Contacts = [{
  name: string;
  url: string;
  email: string;
  phone: string;
}]

export default function Data() {
	const [contacts, setContacts] = useState([
    {
      name: 'Albert Einstein',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
      email: 'al.einstein@linkedex.com',
      phone: '802-888-5555'
    },
    {
      name: 'Marvin Minksky',
      url: 'https://media.cnn.com/api/v1/images/stellar/prod/160126075011-marvin-minsky-file.jpg?q=x_336,y_192,h_1315,w_2337,c_crop/h_653,w_1160/f_webp',
      email: 'marvin.minksky@linkedex.com',
      phone: '802-888-7777'
    },
    {
      name: 'Margaret Hamilton',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/440px-Margaret_Hamilton_1995.jpg',
      email: 'maggie.hamilton@linkedex.com',
      phone: '802-888-8888'
    }
  ]);

  const newContact = {
    name: 'Ada',
    url: '',
    email: '',
    phone: ''
  };

  const addContact = () => {
    setContacts([...contacts, newContact]);
    console.log(newContact);
  };
 
  return (
    <>
      {contacts.map((contact, index) => (
        <div className='contact-data' key={index}>
          <img className='contact-data-url' src={contact.url} alt={contact.name} />
          <p className='contact-data-info'>{contact.name}</p>
          <p className='contact-data-info'>{contact.email}</p>
          <p className='contact-data-info'>{contact.phone}</p>
        </div>

      ))}

    </>
  );
};
