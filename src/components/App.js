import React, { Component } from 'react';
import '../css/App.css';
import MoviesContainer from './MoviesContainer';
import MovieDetailsContainer from './MovieDetailsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
      if(response.ok){
        console.log(response, 'response')
        return response.json();
      } else {
        throw Error(response.status);
      }})
    .then(movieData => this.setState({ movies: movieData.movies }))
    .catch(error => {
      console.log(error);
      this.setState({ movies: [],
      status: true })})
  }

  findMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => this.setState({ movies: [...this.state.movies],
        movieSelected: movie }))
      .catch(error => {
        console.log(error);
        this.setState({ movies: [], movieSelected: { },
        status: true })})
  }

  redirectHome = () => {
    this.setState({ movies: [...this.state.movies],
                    movieSelected: null });
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.status && <h2 className='error-message'>Oops, something went wrong</h2>}
        {this.state.movieSelected ?
          <MovieDetailsContainer movieSelected={ this.state.movieSelected } redirectHome={ this.redirectHome} status={this.state.status}/> : <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/> }
      </main>
    );
  }
};

export default App;
