"use client";
import { useState } from "react";

export default function SearchContacts({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input
        className='search-contacts form-control text-center'
        type='text'
        placeholder='Search Contacts'
        onChange={(e) => {
          setSearchTerm(e.target.value);
          onSearchTermChange(searchTerm);
        }}
      />
    </div>
  );
}

// import React from 'react';

// function SearchContacts() {
// 	const handleClick = () => {
// 		console.log('click!');
// 	};

// 	return (
// 		<form className='search-contacts'>
// 			<h3>Add a New Post</h3>

// 			<div className='form-group'>
// 				<input
// 					type='text'
// 					id='search-item'
// 					className='form-control'
// 					placeholder='Search Contacts'
// 				/>
// 			</div>

// 			<button
// 				onClick={handleClick}
// 				type='button'
// 				className='btn btn-primary'
// 			>
// 				Search
// 			</button>
// 		</form>
// 	);
// }

// export default SearchContacts;
