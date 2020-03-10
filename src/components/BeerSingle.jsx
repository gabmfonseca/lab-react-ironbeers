import React from 'react';
import './BeerSingle.css';

const BeerSingle = props => {
  return (
    <div className="single-beer">
      <figure className="single-beer-img">
        <img src={props.image_url} alt={props.name} />
      </figure>
      <div className="single-beer-title">
        <h2>{props.name}</h2>
        <h2 className="text-grey">{props.attenuation_level}</h2>
      </div>
      <div className="single-beer-subtitle">
        <p className="text-grey">{props.tagline}</p>
        <p>{props.first_brewed}</p>
      </div>
      <div className="single-beer-info">
        <p>{props.description}</p>
        <p className="text-grey">{props.contributed_by}</p>
      </div>
    </div>
  );
};

export default BeerSingle;
