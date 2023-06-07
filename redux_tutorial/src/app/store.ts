import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/navigations/navigationSlice';
import postReducer from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {navigation: navigationReducer,
              posts: postReducer},

}); // reducer is an object that contains the reducers for the different parts of the state

export type AppDispatch = typeof store.dispatch; // Export a type for the dispatch function so that we can use it elsewhere

export type RootState = ReturnType<typeof store.getState>; // Export a type for the state so that we can use it elsewhere

