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
  
  componentDidMount = () => {
    this.setState({ movies: movieData.movies })
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        <MoviesContainer movies={this.state.movies}/>
      </main>

      )
  }
}

export default App;
