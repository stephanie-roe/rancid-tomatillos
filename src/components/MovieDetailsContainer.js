import React from 'react'
import '../css/MovieDetailsContainer.css'
import MovieDetailsCard from './MovieDetailsCard'


const MoviesDetailsContainer = ({ movieSelected, redirectHome }) => {

  return (
    <div className="MoviesDetailsContainer" style={{
          backgroundImage: `url(${movieSelected.backdrop_path})`
        }}>
      <MovieDetailsCard posterUrl={ movieSelected.poster_path }
                        title={movieSelected.title}
                        averageRating={movieSelected.average_rating}/>
      <button onClick={() => redirectHome()}>TAKE ME HOME</button>
    </div>
  )
  // background will be the background image from prop obj
}

// this is just the div that the movie card will go in

// will pass down more info for props when we incorporate API (overview, runtime, etc)
export default MoviesDetailsContainer;
