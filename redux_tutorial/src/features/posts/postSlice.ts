import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IPost } from "../../typings";

interface IAllPosts {
  allPosts: IPost[];
  currentPost: IPost;
}

const defaultCurrentPost: IPost = {
  id: 0,
  title: "",
  content: "",
  voteCount: 0,
  isFavorite: false,
};

const initialState: IAllPosts = {
  allPosts: [],
  currentPost: defaultCurrentPost,
};

export const postSlice = createSlice({
  name: "all-posts",
  initialState: initialState,
  reducers: {
    saveBlogPost: (state, actions: { payload: IPost }) => {
      state.allPosts.push(actions.payload);
    },
    upvotePost: (state, actions: { payload: number }) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount + 1 };
        }
        return post;
      });
      state.allPosts = updatedPosts;
    },
    downvotePost: (state, actions: { payload: number }) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, voteCount: post.voteCount - 1 };
        }
        return post;
      });
      state.allPosts = updatedPosts;
    },
    toggleFavorite: (state, actions: { payload: number }) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload) {
          return { ...post, isFavorite: !post.isFavorite };
        }
        return post;
      });
      state.allPosts = updatedPosts;
    },
    setCurrentPost: (state, action: { payload: IPost }) => {
      state.currentPost = action.payload;
      return state;
    },
    updatePost: (
      state,
      actions: { payload: { id: number; content: string; title: string } }
    ) => {
      const updatedPosts = state.allPosts.map((post) => {
        if (post.id === actions.payload.id) {
          return {
            ...post,
            title: actions.payload.title,
            content: actions.payload.content,
          };
        }
        return post;
      });
      state.allPosts = updatedPosts;
    },
    updateBlogPost: (
      state,
      actions: { payload: { id: number; content: string; title: string } }) => {
        const updatedPosts = state.allPosts.map((post) => {
          if (post.id === actions.payload.id) {
            return {
              ...post,
              title: actions.payload.title,
              content: actions.payload.content,
            };
          }
          return post;
        });
        state.allPosts = updatedPosts;
      },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;

export const {
  saveBlogPost,
  upvotePost,
  downvotePost,
  toggleFavorite,
  setCurrentPost,
  updateBlogPost

} = postSlice.actions;

export default postSlice.reducer;