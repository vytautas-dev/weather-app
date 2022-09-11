import { ActionTypes } from '../action-types';
import { WeatherAction, WeatherState } from '../actions';

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export const weatherReducer = (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case ActionTypes.GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
