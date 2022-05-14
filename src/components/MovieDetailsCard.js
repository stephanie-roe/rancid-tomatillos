import React from 'react';
import '../css/MovieDetailsCard.css';


const MovieDetailsCard = ({ posterUrl, title, averageRating, overview, runtime }) => {
  return (
    <div className="MovieDetailsCard">
      <img className="mini-poster" src={ posterUrl }/>
      <div className="details-container">
        <h2>{ title }</h2>
        <p>Average Rating: { averageRating }</p>
        <p>Overview: { overview }</p>
        <p>Runtime: { runtime }mins</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard
