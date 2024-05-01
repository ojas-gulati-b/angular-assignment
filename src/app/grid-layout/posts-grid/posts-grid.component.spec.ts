import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsGridComponent } from './posts-grid.component';
import { PostsService } from '../../shared/services/posts.service';
import { of } from 'rxjs';
import { MOCK_POSTS } from '../../shared/mocks/posts';

let mockPostsService: Partial<PostsService> = {
  selectPost: () => {},
  getSelectedPost: () => of(null),
};

describe('PostsGridComponent', () => {
  let component: PostsGridComponent;
  let fixture: ComponentFixture<PostsGridComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsGridComponent],
      providers: [
        {
          provide: PostsService,
          useValue: { ...mockPostsService },
        },
      ],
    }).compileComponents();

    postsService = TestBed.inject(PostsService);
    fixture = TestBed.createComponent(PostsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call selectPost method of postsService when onSelectPost is called', () => {
    const postId = 1;
    spyOn(postsService, 'selectPost');
    component.onSelectPost(postId);
    expect(postsService.selectPost).toHaveBeenCalledWith(postId);
  });

  it('should display posts', () => {
    component.posts = MOCK_POSTS;
    fixture.detectChanges();
    const postElements = fixture.nativeElement.querySelectorAll('.post');
    expect(postElements.length).toBe(MOCK_POSTS.length);
  });
});
