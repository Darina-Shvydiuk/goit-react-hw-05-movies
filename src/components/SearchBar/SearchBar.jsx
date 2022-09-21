import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from '../SearchBar/SearchBar.module.css';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [value, setValue] = useState(query || '');

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query?.trim() === '') {
      return toast.error('What will we look for?');
    }
    setSearchParams({ query: value });
    // resetForm();
  };

  // const resetForm = () => {
  //   setValue('');
  // };

  return (
    <>
      <div className={s.searchbar}>
        <form className={s.form} onSubmit={handleSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.button_label}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
    </>
  );
};
