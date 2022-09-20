import React from 'react';
import PropTypes from 'prop-types';
import { MovieItem } from 'components/MovieItem';
import { Loader } from 'components/Loader';
import s from '../MovieList/MovieList.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const MovieList = ({ movies = [], status = Status.IDLE }) => {
  return (
    <>
      {status === Status.RESOLVED && (
        <ul className={s.movie_list}>
          {movies.map(({ id, original_title, poster_path }) => (
            <MovieItem
              key={id}
              id={id}
              original_title={original_title}
              poster_path={poster_path}
            />
          ))}
        </ul>
      )}
      {status === Status.PENDING && <Loader />};
      {status === Status.REJECTED && (
        <p className={s.error}>Something went wrong....</p>
      )}
    </>
  );
};
MovieList.propTypes = {
  status: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
