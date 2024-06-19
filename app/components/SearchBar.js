'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchBar = ({ onSearchTermChange }) => {
    const [term, setTerm] = useState('');

    return (
        <div className="search-bar">
            <form className="form-group">
                <input type="text" className="form-control" placeholder="Search Contacts" value={term} onChange={(e) => {
                    setTerm(e.target.value);
                    onSearchTermChange(e.target.value);
                }}
                />
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    term: PropTypes.string
}
