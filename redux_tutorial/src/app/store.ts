import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
}); // reducer: {} is empty for now

export type AppDispatch = typeof store.dispatch; // Export a type for the dispatch function so that we can use it elsewhere

export type RootState = ReturnType<typeof store.getState>; // Export a type for the state so that we can use it elsewhere

