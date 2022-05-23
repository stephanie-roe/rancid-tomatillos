import React, { Component } from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';
import MoviesContainer from './MoviesContainer';
import { Link } from 'react-router-dom';

class MovieDetailsContainer extends Component {
  constructor({ id }) {

    super()
    this.state = {
      movieID: id,
      success: null,
      movieSelected: {}
    }

  }


componentDidMount = () => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieID}`)
  .then(response => {

    if(response.ok) {
      return response.json();
    } else {
      throw Error(response.status);
    }})
    .then(movie => {
      this.setState({
              movieID: this.state.movieID,
              success: true,
              movieSelected: movie
       })
    })
    .catch(error => {
      console.log(error);
      this.setState({
          movieID: 0,
          movieSelected: {},
          success: false })})
}

  render() {
    if (this.state.success === false) {
      return (<h2 className="error-message">Oops, something went wrong</h2>)
    } else if ( this.state.success === true) {
      return (<div>
      <div className="background-image" style={{
                      backgroundImage: `url(${this.state.movieSelected.movie.backdrop_path})`,
                      opacity: 0.2,
                      height: '100%',
                      width: '100%',
                      backgroundRepeat: 'no-repeat',
                      zIndex: -1,
                      position: 'absolute'}}></div>
      <div className="MoviesDetailsContainer" >
                  <div className='button-container'>
                    <Link to="/">
                      <button className="take-me-home">TAKE ME HOME</button>
                    </Link>
                  </div>
                  <MovieDetailsCard posterUrl={ this.state.movieSelected.movie.poster_path }
                                    title={ this.state.movieSelected.movie.title }
                                    averageRating={ this.state.movieSelected.movie.average_rating.toFixed(1) }
                                    id={ this.state.movieSelected.movie.id }
                                    runtime={ this.state.movieSelected.movie.runtime }
                                    overview={ this.state.movieSelected.movie.overview } />
                </div>
                </div>)
      }
    }

};

export default MovieDetailsContainer;
