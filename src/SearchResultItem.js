import React from 'react';

function SearchResultItem(props) {
  const {data} = props;

  console.log('data', data);
  return (
    <div className="search-result">
      <div className="image">
        <img src={data.image.url} alt="super pic" />
      </div>
      <div className="hero-information">
        <h1 className="name">{data.name}</h1>
        <span style={{ color:'#2B3570', marginBottom: 5 }}>{data.biography['full-name']}</span>
        <div className="stats">
          <div>Origin: {data.biography.['place-of-birth']}</div>
          <div>First-Appearance: {data.biography.['first-appearance']}</div>
          <div>Universe: {data.biography.publisher}</div>
          <div>Strength: {data.powerstats.strength}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;