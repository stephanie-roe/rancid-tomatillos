import React, { Component } from 'react'
import '../css/App.css';
import movieData from '../movieData'
import MoviesContainer from './MoviesContainer'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  // add it to state as a property -- movie to be displayed -- dev empathy
  // similar to invoking the func in conditional logic and seeing it its truthy or flasy
  componentDidMount = () => {
    this.setState({ movies: movieData.movies })
  }

  findMovie = (id) => {
    console.log("that worked")
    const movie = this.state.movies.find((movie) => movie.id === id);
    console.log(movie)
    this.setState({ movies: [...this.state.movies],
                    movieSelected: movie })
  }



  render() {
    // conditional logic goes here-- say if the element that was clicked has an id matching one of the ids in the state, then render that movie card
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.movieSelected ? <h2>conditional logic passing</h2> : <MoviesContainer movies={this.state.movies} findMovie={ this.findMovie }/> }
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

export default App;
