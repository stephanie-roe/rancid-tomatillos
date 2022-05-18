import React from 'react';
import '../css/Poster.css';
import { Link } from 'react-router-dom';


const Poster = ({ id, key, title, posterUrl, getID }) => {
    return (
      <Link to={`/${id}`}>
        <img className='Poster' src={posterUrl} alt={title} id={id} key={key} onClick={() => getID(id)}/>
      </Link>
    );
};

export default Poster;
