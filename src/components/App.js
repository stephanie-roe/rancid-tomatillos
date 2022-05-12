import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos</h1>
        {/* <MoviesContainer />
        <MovieDetailsContainer /> */}
      </main>

      )
  }
}

export default App;
