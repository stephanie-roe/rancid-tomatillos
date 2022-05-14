import React, { Component } from 'react'
import '../css/App.css';
import movieData from '../movieData'
import MoviesContainer from './MoviesContainer'
import MovieDetailsContainer from './MovieDetailsContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
    }
  }
  // add it to state as a property -- movie to be displayed -- dev empathy
  // similar to invoking the func in conditional logic and seeing it its truthy or flasy
  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => {
      if(response.ok){
        return response.json()
      } else {
        throw Error(response.status)
      }})
    .then(movieData => this.setState({ movies: movieData.movies }))
    .catch(error => {
      console.log(error)
      this.setState({ movies: [],
      status: true })})
  }

  findMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw Error(response.status)
      }})
      .then(movie => this.setState({ movies: [...this.state.movies],
        movieSelected: movie }))
      .catch(error => {
        console.log(error)
        this.setState({ movies: [], movieSelected: { },
        status: true })})
  }


  // findMovie = (id) => {
  //   const movie = this.state.movies.find((movie) => movie.id === id);
  //   // set movie to be the object.
  //   this.setState({ movies: [...this.state.movies],
  //                   movieSelected: movie })
  // }

  redirectHome = () => {
    this.setState({ movies: [...this.state.movies],
                    movieSelected: null })
  }

  render() {

    // conditional logic goes here-- say if the element that was clicked has an id matching one of the ids in the state, then render that movie card
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.status && <h2>Oops, something went wrong</h2>}
        {this.state.movieSelected ? <MovieDetailsContainer movieSelected={ this.state.movieSelected } redirectHome={ this.redirectHome} status={this.state.status}/> : <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/> }
      </main>
      )
  }
}



// <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/>
        // { this.state.movieSelected && <h2>conditional logic passing</h2> }
// { !this.state.ideas.length && <h2>No ideas yet -- add some!</h2> }
// be iterating through state to see what ids match and then get that single movie obj
// have a separate func in here that iterates thru state and return that obj, bc if it return undefined that is falsy and we would still be able to conditionally render
// send id up in a method that exists in poster and then compare that id to state

// in poster, we could have a method that iterates thru props and finds the match
// { }

//
// {this.state.movieSelected && this.state.status ? <MovieDetailsContainer movieSelected={ this.state.movieSelected } redirectHome={ this.redirectHome}/> : <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/> }

export default App;
