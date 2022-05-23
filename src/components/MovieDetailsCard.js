import React from 'react';
import '../css/MovieDetailsCard.css';


const MovieDetailsCard = ({ posterUrl, title, averageRating, overview, runtime }) => {
  return (
    <div className="MovieDetailsCard">
      <img className="mini-poster" src={ posterUrl }/>
      <div className="details-container">
        <h2 className='title'>{ title }</h2>
        <p className='average-rating'>Average Rating: { averageRating }</p>
        <p className='overview'>Overview: { overview }</p>
        <p className='runtime'>Runtime: { runtime }mins</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
