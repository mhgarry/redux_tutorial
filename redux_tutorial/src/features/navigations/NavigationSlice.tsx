import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { INavigationState } from '../../typings';

const initialState: INavigationState = {
  currentComponent: "AllPostsComponent",
};

export const navigationSlice = createSlice({
  name: "navigations",
  initialState: initialState,
  reducers: {
    switchToAllPostsComponent: (state) => {
      state.currentComponent = "AllPostsComponent";
    },
    switchToAddNewPostComponent: (state) => {
      state.currentComponent = "AddNewPostComponent";
    },
    switchToFavoriteComponent: (state) => {
      state.currentComponent = "FavoriteComponent";
    },
    switchToEditPostComponent: (state) => {
      state.currentComponent = "EditPostComponent";
    },
    switchToViewPostComponent: (state) => {
      state.currentComponent = "ViewPostComponent";
    },
  },
}); // export the navigationSlice reducer function that will be used to create the navigationSlice reducer

export const {
  switchToAllPostsComponent,
  switchToAddNewPostComponent,
  switchToFavoriteComponent,
  switchToEditPostComponent,
  switchToViewPostComponent,
} = navigationSlice.actions; // export the action creators that will be used to dispatch the actions to the store

export const selectCurrentComponent = (state: RootState) =>
  state.navigations.currentComponent; // export the selector that will be used to select the current component from the store

export default navigationSlice.reducer;