import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/types';

export const fetchPosts = createAction('[Grid] Fetch Posts');

export const fetchPostsSuccess = createAction(
  '[Grid] Fetch posts success',
  props<{ posts: Post[] }>()
);

export const fetchPostsFailure = createAction(
  '[Grid] Fetch posts failure',
  props<{ error: any }>()
);

export const selectPost = createAction(
  '[Grid] Select post',
  props<{ id: number }>()
);
