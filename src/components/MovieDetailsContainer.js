import React, { Component } from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';


class MoviesDetailsContainer extends Component {
  constructor({id, redirectHome}) {

    super()
    this.state = {
      testID: id,
      test: 'Fuck'
    }
  
  }

  showMovie = (id) => {
    if (this.state.test === 'Fuck') {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.testID}`)
    .then(response => {
      
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        console.log(movie, 'movie in showMovie')
        this.setState({ 
                testID: id,
                test: 'passed',
                movieSelected: movie  
         })
         console.log(this.state, 'State in SHowMovie')
      })
      .catch(error => {
        console.log(error);
        this.setState({ movieSelected: { },
        status: true })})
  }
  }

  componentDidMount = (id) => {
    if (this.state.test === 'Fuck') {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.testID}`)
    .then(response => {
      console.log(response, 'respnse from ComponentDid MOUNT')
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        console.log(movie, 'movie in response object')
        this.setState({ 
            movieSelected: movie,
            test: 'yay'
         })
      })
      .catch(error => {
        console.log(error);
        this.setState({ movieSelected: { },
        status: true })})
  }}



showPoop = (redirectHome) => {
  return (
    <div className="MoviesDetailsContainer" style={{
          backgroundImage: `url(https://i.ebayimg.com/images/g/i6EAAOSwVVlcZJrl/s-l1600.jpg)`
        , backgroundSize: "100% auto"}}>
      <MovieDetailsCard posterUrl={ 'poop' }
                        title={'poop'}
                        averageRating={'poop'}
                        id={'poop'}
                        runtime={'poop'}
                        overview={'poop'}/>
      <button className="take-me-home" onClick={() => redirectHome()}>TAKE ME HOME</button>
    </div>
  )
}



  render(redirectHome) {
    if (this.state.test === "Fuck") {
      return (
        this.showPoop()
      )
    } else if ( this.state.test === 'yay') {
      return (
        <div className="MoviesDetailsContainer" style={{
                      backgroundImage: `url(${this.state.movieSelected.movie.backdrop_path})`
                    , backgroundSize: "100% auto"}}>
                  <MovieDetailsCard posterUrl={ this.state.movieSelected.movie.poster_path }
                                    title={this.state.movieSelected.movie.title}
                                    averageRating={this.state.movieSelected.movie.average_rating}
                                    id={this.state.movieSelected.movie.id}
                                    runtime={this.state.movieSelected.movie.runtime}
                                    overview={this.state.movieSelected.movie.overview}/>
                  <button className="take-me-home" onClick={() => redirectHome}>TAKE ME HOME</button>
                </div>

      )
      }
    }
  
}

export default MoviesDetailsContainer;

