import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import s from '../MovieItem/MovieItem.module.css';

export const MovieItem = ({ id, original_title, poster_path }) => {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
      <li className={s.movie_item}>
        <img
          className={s.movie_item_image}
          width="280"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <p>{original_title}</p>
      </li>
    </Link>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  original_title: PropTypes.string,
  poster_path: PropTypes.string,
};
