import React from 'react';
import DogEntry from './DogEntry.jsx';

var DogList = (props) => {
  return (
    <div className="list">
      {props.dogs.map(dog => (
        <DogEntry dog={dog} key={dog.id} handleFavoritesClick={props.handleFavoritesClick}/>
      ))}
    </div>
  )
};

export default DogList;



