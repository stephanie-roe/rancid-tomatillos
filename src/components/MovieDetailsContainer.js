import React, { Component } from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';
import MoviesContainer from './MoviesContainer';
import { Link } from 'react-router-dom';



class MoviesDetailsContainer extends Component {
  constructor({ id }) {

    super()
    this.state = {
      movieID: id,
      success: false,
      movieSelected: {}
    }

  }

  componentDidMount = () => {
    // console.log("ID", this.state.movieID)
    if (this.state.success === false) {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieID}`)
    .then(response => {

      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        // console.log(movie, 'movie in showMovie')
        this.setState({
                movieID: this.state.movieID,
                success: true,
                movieSelected: movie
         })
         // console.log(this.state, 'State in SHowMovie')
      })
      .catch(error => {
        console.log(error);
        this.setState({
            movieID: 0,
            movieSelected: {},
         success: false })})
  }
  }

  render() {
    if (this.state.success === false) {
      return (<h2>Oops, something went wrong. Please try again</h2>)
    } else if ( this.state.success === true) {
      return (<div className="MoviesDetailsContainer" style={{
                      backgroundImage: `url(${this.state.movieSelected.movie.backdrop_path})`,
                      backgroundSize: "100% auto"}}>
                  <MovieDetailsCard posterUrl={ this.state.movieSelected.movie.poster_path }
                                    title={ this.state.movieSelected.movie.title }
                                    averageRating={ this.state.movieSelected.movie.average_rating }
                                    id={ this.state.movieSelected.movie.id }
                                    runtime={ this.state.movieSelected.movie.runtime }
                                    overview={ this.state.movieSelected.movie.overview } />
                  <Link to="/">
                    <button className="take-me-home">TAKE ME HOME</button>
                  </Link>
                </div>)
      }
    }

};

export default MoviesDetailsContainer;
