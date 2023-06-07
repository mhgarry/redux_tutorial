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
    },
    upvotePost: (state, actions:{payload: number}) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount ++};
        }
        return post;
      });
      state.allPosts === updatedPosts;
          },
      downvotePost: (state, actions:{payload: number}) => {
        const updatedPosts = state.allPosts.map((post) => {
          if (post.id === actions.payload) {
            return {...post, voteCount: post.voteCount --};
          }
          return post;
        })
        state.allPosts === updatedPosts;
      },
        },
      })

export const selectAllPosts = (state: RootState) => state.posts;

export const { saveBlogPost, upvotePost, downvotePost } = postSlice.actions;

export default postSlice.reducer;