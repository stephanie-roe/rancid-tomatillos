import React from 'react'
import '../css/MoviesContainer.css'
import Poster from './Poster'

const MoviesContainer = ({ movies }) => {
    const moviePosters = movies.map(movie => {
        return (
            <Poster 
            id={movie.id}
            key={movie.id} 
            title={movie.title}
            posterUrl={movie.poster_path}
             />
        )
    })

    return (
        <div className='MoviesContainer'>
            {moviePosters}
        </div>
    )
}
export default MoviesContainer