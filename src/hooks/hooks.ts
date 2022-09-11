import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import type { RootState } from '../state/store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
