import React, { Component } from 'react';
import Header from './../components/Header';
import { randomBeer } from './../services/beer';
import BeerSingle from './../components/BeerSingle';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    randomBeer()
      .then(beer => {
        // console.log(beer);
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beer && <BeerSingle {...this.state.beer} />}
      </div>
    );
  }
}

export default RandomBeer;
