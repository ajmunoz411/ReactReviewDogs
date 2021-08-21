import React from 'react';
import DogList from './DogList';
import Favorites from './Favorites';
import doggiesData from '../../../data/dogs.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      doggiesData: [],
      favorites: [],
    };
    this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  };

  componentDidMount() {
    this.setState({
      doggiesData: doggiesData.dogs
    });
  };

  handleFavoritesClick(dog) {
    this.setState((prevState) => {
      if (prevState.favorites.indexOf(dog) === -1) {
        return {
          favorites: [...prevState.favorites, dog]
        }
      } else {
          console.error('dog is already in favorites');
          return prevState;
        }
      });
  };

  handleRemoveClick(dog) {
    this.setState({
      favorites: this.state.favorites.filter(favDog => favDog.id !== dog.id)
    })
  }

  render() {
    return (
      <div>
        <h1 className="title">Dogs of the World</h1>
        <Favorites favorites={this.state.favorites} handleRemoveClick={this.handleRemoveClick}/>
        <DogList dogs={this.state.doggiesData} handleFavoritesClick={this.handleFavoritesClick} />
      </div>
    )
  }
};

export default App;