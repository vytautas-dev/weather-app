import { ActionTypes } from '../action-types';
import { AlertAction, AlertState } from '../actions';

const initialState: AlertState = {
  message: '',
};

export const alertReducer = (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
