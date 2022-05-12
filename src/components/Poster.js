import React from 'react'
import '../css/Poster.css'

const Poster = ({ id, key, title, posterUrl }) => {
    return (
        <img className='Poster' src={posterUrl} alt={title} id={id}/>
    )
}

export default Poster