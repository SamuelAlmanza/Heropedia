import React from 'react';
import SearchResultItem from './SearchResultItem';

function SearchResults(props) {
  const {heroData = []} = props;

  console.log('heroData', heroData);
  return (
    <div>
      {heroData.map(superhero =>
        <SearchResultItem data={superhero} />
      )}
    </div>
  );
}

export default SearchResults;