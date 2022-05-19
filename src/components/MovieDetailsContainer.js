import React, { Component } from 'react';
import '../css/MovieDetailsContainer.css';
import MovieDetailsCard from './MovieDetailsCard';
import MoviesContainer from './MoviesContainer';
import { Link } from 'react-router-dom';



class MoviesDetailsContainer extends Component {
  constructor({id, redirectHome}) {

    super()
    this.state = {
      movieID: id,
      success: false,
      movieSelected: {}
    }

  }
// change to component did mount
  componentDidMount = (id) => {
    if (this.state.success === false) {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.movieID}`)
    .then(response => {

      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.status);
      }})
      .then(movie => {
        console.log(movie, 'movie in showMovie')
        this.setState({
                movieID: id,
                success: true,
                movieSelected: movie
         })
         console.log(this.state, 'State in SHowMovie')
      })
      .catch(error => {
        console.log(error);
        this.setState({
            movieID: 0,
            movieSelected: {},
         success: false })})
  }
  }

  // componentDidMount = (id) => {
  //   if (this.state.test === 'Fuck') {fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.testID}`)
  //   .then(response => {
  //     console.log(response, 'respnse from ComponentDid MOUNT')
  //     if(response.ok) {
  //       return response.json();
  //     } else {
  //       throw Error(response.status);
  //     }})
  //     .then(movie => {
  //       console.log(movie, 'movie in response object')
  //       this.setState({
  //           movieSelected: movie,
  //           test: 'yay'
  //        })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ movieSelected: { },
  //       status: true })})
  // }}

  // componentDidMount = (id) => {
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.testID}`)
  //   .then(response => {
  //     console.log(response, 'respnse from ComponentDid MOUNT')
  //     if(response.ok) {
  //       return response.json();
  //     } else {
  //       throw Error(response.status);
  //     }})
  //     .then(movie => {
  //       console.log(movie, 'movie in response object')
  //       this.setState({
  //           movieSelected: movie,
  //        })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       this.setState({ movieSelected: { },
  //        })})
  // }


// showPoop = (redirectHome) => {
//   return (
//     <div className="MoviesDetailsContainer" style={{
//           backgroundImage: `url(https://i.ebayimg.com/images/g/i6EAAOSwVVlcZJrl/s-l1600.jpg)`
//         , backgroundSize: "100% auto"}}>
//       <MovieDetailsCard posterUrl={ 'poop' }
//                         title={'poop'}
//                         averageRating={'poop'}
//                         id={'poop'}
//                         runtime={'poop'}
//                         overview={'poop'}/>
//       <Link to="/">
//         <button className="take-me-home" onClick={() => redirectHome()}>TAKE ME HOME</button>
//       </Link>
//     </div>
//   )
// }

// we can still use conditional structure, but we can frame it as error handling for api call and if the user has in fact selected a movie

  render(redirectHome) {
    if (this.state.success === false) {
      return (
        <h2>Oops, something went wrong. Please try again</h2>
      )
    } else if ( this.state.success === true) {
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
                  <Link to="/">
                    <button className="take-me-home" onClick={() => redirectHome}>TAKE ME HOME</button>
                  </Link>
                </div>

      )
      }
    }

//   render(redirectHome) {
//       return (<div className="MoviesDetailsContainer" style={{
//                       backgroundImage: `url(${this.state.movieSelected.movie.backdrop_path})`
//                     , backgroundSize: "100% auto"}}>
//                   <MovieDetailsCard posterUrl={ this.state.movieSelected.movie.poster_path }
//                                     title={this.state.movieSelected.movie.title}
//                                     averageRating={this.state.movieSelected.movie.average_rating}
//                                     id={this.state.movieSelected.movie.id}
//                                     runtime={this.state.movieSelected.movie.runtime}
//                                     overview={this.state.movieSelected.movie.overview}/>
//                   <Link to="/">
//                     <button className="take-me-home" onClick={() => redirectHome}>TAKE ME HOME</button>
//                   </Link>
//                 </div>)
//     }
//
};

export default MoviesDetailsContainer;
