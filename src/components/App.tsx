import React, { FC } from 'react';
import { useActions, useAppSelector } from '../hooks/hooks';
import './App.css';
import Alert from './Alert';
import Search from './Search';
import Weather from './Weather';

const App: FC = () => {
  const { data, loading, error } = useAppSelector(state => state.weather);
  const { message } = useAppSelector(state => state.alert);

  const { setAlert, setError } = useActions();

  return (
    <div className='hax-text-centered'>
      <Search title='Enter city name and press search button' />
      {loading ? <h2 className='is-size-3 py-2'> Loading...</h2> : data && <Weather data={data} />}
      {message && <Alert message={message} onClose={() => setAlert('')} />}
      {error && <Alert message={error} onClose={() => setError()} />}
    </div>
  );
};

export default App;
