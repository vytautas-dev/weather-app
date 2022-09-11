import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
import { weatherReducer } from './weatherReducer';

const reducers = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});

export default reducers;
