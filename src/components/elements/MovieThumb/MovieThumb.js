import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
            {props.clickable ?
                <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}` }}>
                    <img src={props.image} alt="moviethumb" />
                </Link>
                :
                <img src={props.image} alt="moviethumb" />
            }
        </div>
    )
}

MovieThumb.Proptypes = {
    image: Proptypes.string,
    movieId: Proptypes.number,
    movieName: Proptypes.string
}

export default MovieThumb;