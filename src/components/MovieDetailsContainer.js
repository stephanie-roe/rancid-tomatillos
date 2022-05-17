import React from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';


const MoviesDetailsContainer = ({ movieSelected, redirectHome, status }) => {
  if (status) {
    return;
  } else {
  return (
    <div className="MoviesDetailsContainer" style={{
          backgroundImage: `url(${movieSelected.movie.backdrop_path})`
        , backgroundSize: "100% auto"}}>
      <MovieDetailsCard posterUrl={ movieSelected.movie.poster_path }
                        title={movieSelected.movie.title}
                        averageRating={movieSelected.movie.average_rating}
                        id={movieSelected.movie.id}
                        runtime={movieSelected.movie.runtime}
                        overview={movieSelected.movie.overview}/>
      <button className="take-me-home" onClick={() => redirectHome()}>TAKE ME HOME</button>
    </div>);
  }
};

export default MoviesDetailsContainer;
