import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homepage-links">
      <Link to="/beers">Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}

export default Home;
