import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GridLayoutComponent } from './grid-layout.component';
import { PostsService } from '../shared/services/posts.service';
import { MOCK_POSTS } from '../shared/mocks/posts';

let mockPostsService: Partial<PostsService> = {
  getPostsFromStore: () => of(MOCK_POSTS),
  intiateFetchPosts: () => {},
  isGridLoading: () => of(false),
  getGridLoadError: () => of(null),
  getSelectedPost: () => of(null),
};

describe('GridLayoutComponent', () => {
  let component: GridLayoutComponent;
  let fixture: ComponentFixture<GridLayoutComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridLayoutComponent],
      providers: [
        provideMockStore(),
        {
          provide: PostsService,
          useValue: { ...mockPostsService },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GridLayoutComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate fetch posts on ngOnInit', () => {
    spyOn(postsService, 'intiateFetchPosts');
    component.ngOnInit();
    expect(postsService.intiateFetchPosts).toHaveBeenCalled();
  });

  it('should display posts when posts$ is present', () => {
    fixture.detectChanges();
    const posts = fixture.nativeElement.querySelectorAll('app-post');
    expect(posts.length).toBe(2);
  });

  /**
   * Would have covered if time allowed
   *
   */

  // it('should display loader component when loading$ is true', async () => {

  // });

  // it('should display error message when error$ has error', () => {
  // });
});
