import { ActionTypes } from '../action-types';

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibillity: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

interface GetWeatherAction {
  type: typeof ActionTypes.GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof ActionTypes.SET_LOADING;
}

interface SetErrorAction {
  type: typeof ActionTypes.SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
  type: typeof ActionTypes.SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
