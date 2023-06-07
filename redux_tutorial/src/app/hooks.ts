import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to get the dispatch function  (the dispatch function is used to dispatch actions to the store)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to get the state object (the root state)