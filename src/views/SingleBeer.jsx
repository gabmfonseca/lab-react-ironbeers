import React, { Component } from 'react';
import Header from './../components/Header';
import { displayBeer } from './../services/beer';
import BeerSingle from './../components/BeerSingle';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const id = this.props.match.params.id;
    try {
      const beer = await displayBeer(id);
      this.setState({
        beer
      });
    } catch (error) {
      console.log(error);
    }
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

export default SingleBeer;
