import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialReactions = {
  thumbsup: 0,
  wow: 0,
  heart: 0,
  rocket: 0,
  coffee: 0,
};

const initialState = [
  {
    id: "1",
    title: "Walmart",
    content: "Walmart is a very good supermarket store",
    reactions: initialReactions,
  },
  {
    id: "2",
    title: "Web Development",
    content: "I like Web Development",
    reactions: initialReactions,
  },
  {
    id: "3",
    title: "Gardening",
    content: "Gardening can be a very therapuetic",
    userId: "3",
    reactions: initialReactions,
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: initialReactions,
          },
        };
      },
    },
    addReactions: {
      reducer(state, action){
        console.log(state)
        const {postId, reaction } = action.payload
        const existingPost = state.find((post) => post.id === postId)

        if(existingPost){
          existingPost.reactions[reaction]++
        }
      }
    }
  },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost, addReactions } = postsSlice.actions;

export default postsSlice.reducer;
