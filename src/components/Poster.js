import React from 'react';
import '../css/Poster.css';
import { Link } from 'react-router-dom';


const Poster = ({ id, title, posterUrl, getID }) => {
    return (
      <Link to={`/${id}`}>
        <img className='Poster' src={posterUrl} alt={title} id={id} onClick={() => getID(id)}/>
      </Link>
    );
};

export default Poster;
