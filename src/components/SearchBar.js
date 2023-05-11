import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // 여기에 검색 로직을 추가합니다.
    console.log(term);
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
