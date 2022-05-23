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
      success: null
    };
  };

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
      if(response.ok){

        return response.json();
      } else {
        throw Error(response.status);
      }})
    .then(movieData => this.setState({ movies: movieData.movies, success: true }))
    .catch(error => {
      console.log(error);
      this.setState({ movies: [],
      success: false })});
  };

  getID = (id) => {
    this.setState({movies: [...this.state.movies],
                  movieID: id });
  };

  render() {
    if(this.state.success === false) {
      return (<h2 className="error-message">Oops, something went wrong</h2>);
    } else {
      return (
        <main className='App'>
          <h1>Rancid Tomatillos</h1>
          <Route exact path="/" render={() => < MoviesContainer movies={this.state.movies} getID={ this.getID }/>} />
          <Route exact path="/:movieID" render={({ match }) => {
            return <MovieDetailsContainer id={ parseInt(match.params.movieID) } />
          }} />
        </main>
      );
    }
  };

};

export default App;
