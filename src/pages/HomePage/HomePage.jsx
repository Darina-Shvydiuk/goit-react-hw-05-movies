import React from 'react';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../HomePage/HomePage.module.css';

import { getTrending } from '../../services/API';
import { MovieList } from 'components/MovieList';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    (async () => {
      setStatus(Status.PENDING);
      try {
        const { data } = await getTrending();

        if (!data.results.length) {
          setStatus(Status.REJECTED);
          setMovies([]);
          return toast.info('Are you probably wrong? Try again.');
        } else {
          setStatus(Status.RESOLVED);
          setMovies(data.results);
        }
      } catch {
        setStatus(Status.REJECTED);
      }
    })();
  }, []);

  return (
    <>
      <h1 className={s.title}>Trendings Movies</h1>
      {movies.length > 0 && <MovieList movies={movies} status={status} />}

      <ToastContainer autoClose={3000} />
    </>
  );
};
