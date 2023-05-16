import React from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ setCheckedItems, term, setTerm }) => {

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  // 검색 폼 submit
  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} className="search-bar">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="검색..."
          value={term}
          onChange={onInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
