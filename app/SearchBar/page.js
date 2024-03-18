'use client'
import React, { useState } from "react";
import Header from "../Header/page";
// import Data from "../Data/page";

export default function SearchBar({ contacts }) {
  const [input, setInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchInput = (e) => {
    const searchInput = e.target.value;
    console.log(e.target.value);
    setInput(searchInput);

  };

  return (
    <>
      <div className='search-bar'>
        <input className='input input-search' placeholder='Search by name' />
        <button className='button button-search'>Search</button>
      </div>


      {/* {contacts.filter((contact, index) => (
        <div className='contact-search' key={contact.index}>
          <img className='contact-search' src={contact.url} alt={contact.name} />
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </div>

      ))} */}

    </>
  );
};