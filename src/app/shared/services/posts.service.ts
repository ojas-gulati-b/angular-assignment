import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../models/types';
import {
  getAllPosts,
  getGridError,
  getGridLoading,
  getSelectedPostId,
} from '../store/grid/grid.selectors';
import { fetchPosts, selectPost } from '../store/grid/grid.actions';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private store = inject(Store);

  getPostsFromStore(): Observable<Post[]> {
    return this.store.select(getAllPosts);
  }

  isGridLoading(): Observable<boolean> {
    return this.store.select(getGridLoading);
  }

  getGridLoadError(): Observable<string | null> {
    return this.store.select(getGridError);
  }

  getSelectedPost(): Observable<number | null> {
    return this.store.select(getSelectedPostId);
  }

  intiateFetchPosts() {
    this.store.dispatch(fetchPosts());
  }

  selectPost(id: number) {
    this.store.dispatch(selectPost({ id }));
  }
}
