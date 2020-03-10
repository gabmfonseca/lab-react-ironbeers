import React, { Component } from 'react';
import Header from './../components/Header';
import { listBeers } from './../services/beer';
import BeerCard from '../components/BeerCard';
import './ListBeers.css';

class ListBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  get filteredBeers() {
    let filteredBeers = this.state.beers.filter(beer =>
      beer.name.toLowerCase().includes(this.state.query.toLowerCase())
    );

    return filteredBeers;
  }

  render() {
    return (
      <div>
        <Header />
        <input
          id="search"
          placeholder="Search beer"
          name="query"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <div className="beer_list">
          {this.filteredBeers.map(item => (
            <BeerCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBeers;
