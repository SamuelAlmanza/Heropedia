import React from 'react';

function SearchBar(props) {
const {handleChange, searchText} = props;

  return (
    <div>
      <input
        id="search-bar"
        type="search"
        placeholder="Who is here to save the day? (Start typing)"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
}

export default SearchBar;