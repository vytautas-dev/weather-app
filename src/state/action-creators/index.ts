import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { AlertAction, WeatherAction, WeatherData } from '../actions';

export const getWeather = (city: string) => {
  return async (dispatch: Dispatch<WeatherAction>) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      const resData: WeatherData = response.data;

      dispatch({ type: ActionTypes.GET_WEATHER, payload: resData });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({ type: ActionTypes.SET_ERROR, payload: error.message });
      }
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: ActionTypes.SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: ActionTypes.SET_ERROR,
    payload: '',
  };
};

export const setAlert = (message: string): AlertAction => {
  return {
    type: ActionTypes.SET_ALERT,
    payload: message,
  };
};
