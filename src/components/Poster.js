import React from 'react'
import '../css/Poster.css'

const Poster = ({ id, key, title, posterUrl, findMovie }) => {
  // create a func that would handle the on click but inside this we would use find movie
  // const handleClick = (event) => {
  //   findMovie(event.target.id)
  // }
    return (
        <img className='Poster' src={posterUrl} alt={title} id={id} key={key} onClick={() => findMovie(id)}/>
    )
}


// class Poster extends Component {
//   constructor() {
//     super()
//     this.state = {}
//   }
//
//   handleClick = (id) => {
//     this.props.findMovie(id)
//   }
//
//   render({ id, title, posterUrl}) {
//     return (
//             <img className='Poster' src={posterUrl} alt={title} id={id} onClick={this.handleClick({id})}/>
//         )
//   }
// }
export default Poster
