import React, { Component } from 'react';
import Header from './../components/Header';
import { listBeers, filterBeers } from './../services/beer';
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
    this.filterBeers = this.filterBeers.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const beers = await listBeers();
      this.setState({
        beers
      });
    } catch (error) {
      console.log(error);
    }
  }

  // fetchData() {
  //   listBeers()
  //     .then(beers => {
  //       console.log(beers);
  //       this.setState({
  //         beers
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      query: value
    });

    this.filterBeers();
  }

  async filterBeers() {
    const query = this.state.query;

    try {
      const beers = await filterBeers(query);
      this.setState({
        beers
      });
    } catch (error) {
      console.log(error);
    }
  }

  // get filteredBeers() {
  //   let filteredBeers = this.state.beers.filter(beer =>
  //     beer.name.toLowerCase().includes(this.state.query.toLowerCase())
  //   );

  //   return filteredBeers;
  // }

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
          {this.state.beers.map(item => (
            <BeerCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListBeers;
