import { createReducer, on } from '@ngrx/store';
import { GridState } from '../../models/types';
import {
  fetchPosts,
  fetchPostsFailure,
  fetchPostsSuccess,
  selectPost,
} from './grid.actions';

export const initialState: GridState = {
  posts: [],
  selectedPostId: null,
  loading: false,
  error: null,
};

export const gridReducer = createReducer(
  initialState,
  on(fetchPosts, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(fetchPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts,
      loading: false,
      error: null,
    };
  }),
  on(fetchPostsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }),
  on(selectPost, (state, action) => {
    return {
      ...state,
      selectedPostId: action.id,
    };
  })
);
