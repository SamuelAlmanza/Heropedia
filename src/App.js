import React, { useState } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [searchText, setSearchText] = useState('');
  const [heroData, setHeroData] = useState([]);

  async function searchSuperHeroes () {
    const response = await fetch(`https://www.superheroapi.com/api.php/10219177700206566/search/${searchText}`);
    const data = await response.json();
    console.log(data) //data check

    setHeroData(data.results);
  }

  //populates search data after user types 3 characters
  function handleChange (event) {
    const searchTerm = event.target.value;
    
    setSearchText(searchTerm);
    if (searchTerm.length === 0) {
      setHeroData([]);
    }
    if (searchTerm.length > 3) {
      searchSuperHeroes();
    }
  }

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <SearchBar searchText={searchText} handleChange={handleChange} />
        <SearchResults heroData={heroData} />
      </div>
    </div>
  );
}

export default App;
