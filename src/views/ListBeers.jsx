import React, { Component } from 'react';
import Header from './../components/Header';
import { listBeers } from './../services/beer';
import BeerCard from '../components/BeerCard';
import './ListBeers.css';

class ListBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    listBeers()
      .then(beers => {
        console.log(beers);
        this.setState({
          beers
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
        <div className="beer_list">
          {this.state.beers.map(item => (
            <BeerCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBeers;
