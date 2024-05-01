import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GridState } from '../../models/types';

export const getGridState = createFeatureSelector<GridState>('grid');

export const getAllPosts = createSelector(
  getGridState,
  (state: GridState) => state.posts
);

export const getSelectedPostId = createSelector(
  getGridState,
  (state: GridState) => state.selectedPostId
);

export const getGridLoading = createSelector(
  getGridState,
  (state: GridState) => state.loading
);

export const getGridError = createSelector(
  getGridState,
  (state: GridState) => state.error
);
