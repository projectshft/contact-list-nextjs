'use client'
import React, { useState } from "react";


export default function SearchBar({ contacts }) {
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  console.log(contacts, "main");

  const handleSearchInput = (e) => {
    const searchInput = e.target.value;
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleSearchClick = () => {
    const foundContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(foundContacts);
    setFilteredData(foundContacts);
  };

  return (
    <>
      <div className='search-bar'>
        <input className='input search-input' placeholder='Search by name' onChange={handleSearchInput} />
        <button className='button search-button' onClick={handleSearchClick}>Search</button>
      </div>
      <div>
        <ul>
          {filteredData.map(contact => (
            <div className='search-result' key={contact.name}>
              <img className='search-result-url' src={contact.url} alt={contact.name} />
            <div>
              <li className='search-result-info'>{contact.name}</li>
              <li className='search-result-info'>{contact.email}</li>
              <li className='search-result-info'>{contact.phone}</li>
            </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};