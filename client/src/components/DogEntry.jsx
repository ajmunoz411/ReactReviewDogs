import React from 'react';

class DogEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: false
    };
    this.handleInfoClick = this.handleInfoClick.bind(this);
  };

  handleInfoClick() {
    this.setState({
      info: !this.state.info
    });
  };

  render() {
    if (!this.state.info) {
      return (
        <div className="list-entry">
          <div className="info">
            <h3>{this.props.dog.name}</h3>
            <button onClick={() => this.props.handleFavoritesClick(this.props.dog)}>Add to Favorites</button>
            <button onClick={this.handleInfoClick}>More info</button>
          </div>
          <div className="photo">
            <img src={this.props.dog.image.url}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="list-entry">
          <div className="info">
            <h3>{this.props.dog.name}</h3>
            <div>Origin: {this.props.dog.origin}</div>
            <div>Bred For: {this.props.dog.bred_for}</div>
            <div>Temperament: {this.props.dog.temperament}</div>
            <button onClick={() => this.props.handleFavoritesClick(this.props.dog)}>Add to Favorites</button>
            <button onClick={this.handleInfoClick}>Less info</button>
          </div>
          <div className="photo">
            <img src={this.props.dog.image.url}/>
          </div>
        </div>
      )
    }
  }
};

export default DogEntry;


// MORE INFO
{/* <div class="list-entry">
  <div class="info">
    <h3>Dog Entry Name</h3>
    <div>Origin: Dog Entry Origin</div>
    <div>Bred For: Dog Entry Bred For</div>
    <div>Temperament: Dog Entry Temperament</div>
    <button>Add to Favorites</button>
    <button>Less info</button>
  </div>
  <div class="photo">
    <img src=Dog Entry Photo Url />
  </div>
</div> */}

