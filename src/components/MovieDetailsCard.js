import React from 'react'
import '../css/MovieDetailsCard.css'

const MovieDetailsCard = ({ posterUrl, title, averageRating }) => {
  return (
    <div className="MovieDetailsCard">
      <img src={ posterUrl }/>
      <div className="details-container">
        <h2>{ title }</h2>
        <p>Average Rating: { averageRating }</p>
        <p></p>
      </div>
    </div>
  )
  // movie TITLE
  // movie poster
  // whatever facts we include
}

export default MovieDetailsCard
