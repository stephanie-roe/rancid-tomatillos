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
    //iterate over state all movies and see if we can find matching ids, return that id, which
    console.log(id)
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        this.setState({ movies: [...this.state.movies],
        movieSelected: movie })
        console.log(this.state.movieSelected)
      })
      .catch(error => {
        console.log(error);
        this.setState({ movies: [], movieSelected: { },
        status: true })})
  }

  // async findMovie = (id) => {
  //   await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json();
  //     } else {
  //       throw Error(response.status);
  //     }})
  //     .then(movie => {
  //       return movie
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }


  // findMovie(id) {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  //   .then(response => {
  //     if(response.ok) {
  //       return response.json();
  //     } else {
  //       throw Error(response.status);
  //     }})
  //     .then(movie => {
  //       return movie
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  redirectHome = () => {
    this.setState({ movies: [...this.state.movies],
                    movieSelected: null });
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <Route exact path="/" render={() => < MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/>} />
        <Route exact path="/:movieID" render={({ match }) => {
          return <MovieDetailsContainer id={ parseInt(match.params.movieID) } redirectHome={ this.redirectHome} />
        }} />
      </main>
    );
  }
};

export default App;

// change details container to a class comonent, move fetch to componentDidMount and then we would match the id from the params to the id of the component, and we could render accordingly


        // {this.state.status && <h2 className='error-message'>Oops, something went wrong</h2>}

// {this.state.movieSelected ?
//   <MovieDetailsContainer movieSelected={ this.state.movieSelected } redirectHome={ this.redirectHome} status={this.state.status}/> : <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/> }
