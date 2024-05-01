import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostsService } from './posts.service';
import { Post } from '../models/types';
import { fetchPosts, selectPost } from '../store/grid/grid.actions';
import {
  getAllPosts,
  getGridError,
  getGridLoading,
  getSelectedPostId,
} from '../store/grid/grid.selectors';
import { MOCK_POSTS } from '../mocks/posts';

describe('PostsService', () => {
  let service: PostsService;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
    });
    service = TestBed.inject(PostsService);
    store = TestBed.inject(Store) as MockStore;

    store.overrideSelector(getAllPosts, MOCK_POSTS);
    store.overrideSelector(getGridLoading, false);
    store.overrideSelector(getGridError, null);
    store.overrideSelector(getSelectedPostId, 2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return posts from store', () => {
    const posts$: Observable<Post[]> = service.getPostsFromStore();
    posts$.subscribe((posts) => {
      expect(posts).toEqual(MOCK_POSTS);
      //done();
    });
  });

  it('should return loading state from store', () => {
    const loading$: Observable<boolean> = service.isGridLoading();
    loading$.subscribe((loading) => {
      expect(loading).toBe(false);
    });
  });

  it('should return error state from store', () => {
    const error$: Observable<string | null> = service.getGridLoadError();
    error$.subscribe((error) => {
      expect(error).toBe(null);
    });
  });

  it('should return selected post id from store', () => {
    const postId$: Observable<number | null> = service.getSelectedPost();
    postId$.subscribe((id) => {
      expect(id).toBe(2);
    });
  });

  it('should dispatch fetchPosts action', () => {
    spyOn(store, 'dispatch');
    service.intiateFetchPosts();
    expect(store.dispatch).toHaveBeenCalledWith(fetchPosts());
  });

  it('should dispatch selectPost action with provided id', () => {
    const postId = 1;
    spyOn(store, 'dispatch');
    service.selectPost(postId);
    expect(store.dispatch).toHaveBeenCalledWith(selectPost({ id: postId }));
  });
});
