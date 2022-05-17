import React, { Component } from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';


// const MoviesDetailsContainer = ({ movieSelected, redirectHome, status }) => {
//   if (status) {
//     return;
//   } else {
//   return (
//     <div className="MoviesDetailsContainer" style={{
//           backgroundImage: `url(${movieSelected.movie.backdrop_path})`
//         , backgroundSize: "100% auto"}}>
//       <MovieDetailsCard posterUrl={ movieSelected.movie.poster_path }
//                         title={movieSelected.movie.title}
//                         averageRating={movieSelected.movie.average_rating}
//                         id={movieSelected.movie.id}
//                         runtime={movieSelected.movie.runtime}
//                         overview={movieSelected.movie.overview}/>
//       <button className="take-me-home" onClick={() => redirectHome()}>TAKE ME HOME</button>
//     </div>);
//   }
// };

class MoviesDetailsContainer extends Component {
  constructor({id, redirectHome}) {
    super()
    this.state = { movieSelected: {} }
  }

  componentDidMount = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        this.setState({ movieSelected: movie })
      })
      .catch(error => {
        console.log(error);
        this.setState({ movieSelected: { },
        status: true })})
  }

  render(redirectHome) {
    return(
      <div className="MoviesDetailsContainer" style={{
                backgroundImage: `url(${this.state.movieSelected.movie.backdrop_path})`
              , backgroundSize: "100% auto"}}>
            <MovieDetailsCard posterUrl={ this.state.movieSelected.movie.poster_path }
                              title={this.state.movieSelected.movie.title}
                              averageRating={this.state.movieSelected.movie.average_rating}
                              id={this.state.movieSelected.movie.id}
                              runtime={this.state.movieSelected.movie.runtime}
                              overview={this.state.movieSelected.movie.overview}/>
            <button className="take-me-home" onClick={() => redirectHome()}>TAKE ME HOME</button>
          </div>
    )
  }
}

export default MoviesDetailsContainer;
