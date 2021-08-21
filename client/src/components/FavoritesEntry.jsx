import React from 'react';

const FavoritesEntry = (props) => (
  <div className="fav-entry">
    <h3>{props.dog.name}</h3>
    <div className="fav-photo">
      <img src={props.dog.image.url}/>
    </div>
    <button onClick={() => props.handleRemoveClick(props.dog)}>Remove from Favorites</button>
  </div>
);

export default FavoritesEntry;