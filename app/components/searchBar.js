'use client';

import { useState } from 'react';
// import PropTypes from 'prop-types';

export const SearchBar = ({ onSearchTermChange }) => {
  const [term, setTerm] = useState('');

  return (
    <div className="search-bar">
      <input
        placeholder="Search Contacts"
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
          onSearchTermChange(event.target.value);
        }}
      />
    </div>
  );
};

// SearchBar.propTypes = {
//   onSearchTermChange: PropTypes.func.isRequired,
// };
