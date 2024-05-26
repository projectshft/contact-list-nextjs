'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ContactListAPI } from '../../data/ContactListAPI';


export default function ProfilePage () {
    const { id } = useParams();
    const profile = ContactListAPI.getContact(id);

console.log(profile);
console.log(id);
    return (
        <>
          <h1>Profile Page</h1>
          <Link href='/contacts' >Back</Link>
          <h2>{profile.name}</h2>
          <img  src={profile.imageURL}
            alt='Profile Pic'
            height={250}
            width={250}
          /> 
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </>
    );
}