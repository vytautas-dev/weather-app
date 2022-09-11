import React, { FC, FormEvent, useState } from 'react';
import { useActions } from '../hooks/hooks';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const { getWeather, setLoading, setAlert } = useActions();
  const [city, setCity] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === '') {
      return setAlert('City is required');
    }
    setLoading();
    getWeather(city);
    setCity('');
  };
  return (
    <div className='hero is-light has-text-centered'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>{title}</h1>
          <form action='' className='py-5' onSubmit={submitHandler}>
            <input
              value={city}
              onChange={changeHandler}
              type='text'
              className='input has-text-centered mb-2'
              placeholder='Enter city name'
              style={{ maxWidth: 300 }}
            />
            <button
              className='button is-primary is-fullwidth'
              style={{ maxWidth: 300, margin: '0 auto' }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
