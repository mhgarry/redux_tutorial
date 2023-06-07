import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IPost } from '../../typings';

interface IAllPosts {
  allPosts: IPost[];
}

const initialState: IAllPosts = {
  allPosts: [] };

export const postSlice = createSlice({
  name: 'all-posts',
  initialState: initialState,
  reducers: {
    saveBlogPost: (state, actions:{payload:IPost}) => {
      state.allPosts.push(actions.payload);
    }
  }
})

export const selectAllPosts = (state: RootState) => state.posts;

export const { saveBlogPost } = postSlice.actions;

export default postSlice.reducer;