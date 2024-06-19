'use client';
import { SearchBar } from './SearchBar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ContactAPI } from '../data/contactAPI';

export const ContactsList = () => {
    const [allContacts, setContacts] = useState(ContactAPI.all());
    const router = useRouter();

    const filterContacts = (input) => {
        setContacts(ContactAPI.all().filter((contact) => contact.name.toLowerCase().trim().includes(input.toLowerCase().trim())))
    }

    return (
        <div>
            <SearchBar onSearchTermChange={filterContacts}></SearchBar>
            <table className="table table-hover contacts-list">
                <thead className='thead-light'>
                    <tr>
                        <th scope="col">Profile Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                        <th scop="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {allContacts.map((contact) => {
                        return (
                            <tr key={contact.id} onClick={() => {router.push(`/contacts/${contact.id}`)}}>
                                <th scope="row"><img src={contact.image} className="profile-pic" alt="profile picture" width="70" height="70"/></th>
                                <td className="align-middle">{contact.name}</td>
                                <td className="align-middle">{contact.email}</td>
                                <td className="align-middle">{contact.phone}</td>
                                <td className="align-middle">Edit</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};
