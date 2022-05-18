import React, { Component } from 'react';
import '../css/App.css';
import MoviesContainer from './MoviesContainer';
import MovieDetailsContainer from './MovieDetailsContainer';
import { Route } from 'react-router-dom';


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

  getID = (id) => {
    this.setState({ 
            movies: [...this.state.movies],
            movieID: id })
  }

  

  redirectHome = () => {
    this.setState({ movies: [...this.state.movies],
                    movieSelected: null });
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Route exact path="/" render={() => < MoviesContainer movies={this.state.movies} getID={ this.getID }/>} />
        <Route exact path="/:movieID" render={({ match }) => {
          return <MovieDetailsContainer id={ parseInt(match.params.movieID) } redirectHome={ this.redirectHome} />
        }} />
      </main>
    );
  }
};

export default App;

