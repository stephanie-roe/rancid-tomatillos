import React from 'react'
import '../css/MovieDetailsCard.css'


const MovieDetailsCard = ({ posterUrl, title, averageRating, overview, runtime }) => {
 
  return (
    <div className="MovieDetailsCard">
      <img src={ posterUrl }/>
      <div className="details-container">
        <h2>{ title }</h2>
        <p>Average Rating: { averageRating }</p>
        <p>Overview: { overview }</p>
        <p>Runtime: { runtime }mins</p>
      </div>
    </div>
  )
}

// class MovieDetailsCard extends Component {
//   constructor( { id } ) {
//     super()
//     this.state = {
//       movie: {},
//       id: id
//     }
//   }

//  async componentDidMount() {
//    console.log(this.state.id, 'state id3')
// const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
// const json = await response.json()
// console.log(json, 'json', response, 'response')

  //  await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.state.id}`)
  // .then(response => await response.json())
  //   .then(movie => this.setState({ movie: movie }))
  //   .catch(error => console.log("error"))
  // }

//    render() {
//     console.log(this.state.movie.movie, 'moviestate')
//     return (
//       <div className="MovieDetailsCard">
//        <img src={ this.state.movie.movie.poster_path }/>
//        <div className="details-container">
//          <h2>{ this.state.movie.title }</h2>
//          <p>{ this.state.movie.overview } </p>
//          <p>Average Rating: { this.state.movie.average_rating }</p>
//          <p>Runtime: { this.state.movie.runtime } mins</p>
//        </div>
//      </div>
//     )
//   }
// }




export default MovieDetailsCard
