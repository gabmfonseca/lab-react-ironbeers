import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homepage-links">
      <Link to="/beers">
        <img
          src={process.env.PUBLIC_URL + '/images/beers.png'}
          alt="Beers List"
          style={{ width: '100%' }}
        />
        <h2>All Beers</h2>
      </Link>
      <Link to="/random-beer">
        <img
          src={process.env.PUBLIC_URL + '/images/random-beer.png'}
          alt="Random Beer"
          style={{ width: '100%' }}
        />
        <h2>Random Beer</h2>
      </Link>
      <Link to="/new-beer">
        <img
          src={process.env.PUBLIC_URL + '/images/new-beer.png'}
          alt="New Beer"
          style={{ width: '100%' }}
        />
        <h2>New Beer</h2>
      </Link>
    </div>
  );
}

export default Home;
