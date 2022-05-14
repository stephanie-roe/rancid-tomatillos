import React from 'react';
import '../css/Poster.css';

const Poster = ({ id, key, title, posterUrl, findMovie }) => {
    return (<img className='Poster' src={posterUrl} alt={title} id={id} key={key} onClick={() => findMovie(id)}/>);
};

export default Poster;
