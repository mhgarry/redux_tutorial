import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { INavigationState } from "../../typings";

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
});

export const {
  switchToAllPostsComponent,
  switchToAddNewPostComponent,
  switchToFavoriteComponent,
  switchToEditPostComponent,
  switchToViewPostComponent,
} = navigationSlice.actions;

export const selectCurrentComponent = (state: RootState) =>
  state.navigation.currentComponent;

export default navigationSlice.reducer;