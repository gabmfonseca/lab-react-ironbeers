import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.css';

const BeerCard = props => {
  return (
    <Link to={`/beers/${props._id}`} className="beer-card">
      <figure className="beer-img">
        <img src={props.image_url} alt={props.name} />
      </figure>
      <div className="beer-info">
        <h3>
          <strong>{props.name}</strong>
        </h3>
        <p className="beer-info-tagline">{props.tagline}</p>
        <p>
          <strong>Created by:</strong> {props.contributed_by}
        </p>
      </div>
    </Link>
  );
};

export default BeerCard;
