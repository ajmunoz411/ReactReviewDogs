import React from 'react';
import FavoritesEntry from './FavoritesEntry';

const Favorites = (props) => {
  return (props.favorites.length > 0) ?
  (
    <div className="fav-cont">
      <h3 className="title">Favorites List</h3>
      <div className="fav-list">
        {props.favorites.map(dog => (
          <FavoritesEntry dog={dog} key={dog.id} handleRemoveClick={props.handleRemoveClick}/>
        ))}
      </div>
    </div>
  )
  :
  (
    <div className="title">No dogs added to favorites</div>
  )
};

export default Favorites;