import React from 'react';
import '../css/Poster.css';
import { Link } from 'react-router-dom';


const Poster = ({ id, key, title, posterUrl, findMovie }) => {
    return (
      <Link to={`/${id}`}>
        <img className='Poster' src={posterUrl} alt={title} id={id} key={key} onClick={() => findMovie(id)}/>
      </Link>
    );
};

export default Poster;
