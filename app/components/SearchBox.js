import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  }


  return (
    <form onSubmit={handleSubmit} className=" relative flex items-center w-96">
      <input
        type="text"
        className="w-full h-8 p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="absolute p-2 right-2 top-1/2 transform -translate-y-1/2"
        aria-label="Search"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBox;
