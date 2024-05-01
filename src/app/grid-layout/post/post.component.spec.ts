import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';
import { of } from 'rxjs';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../shared/models/types';
import { MOCK_POSTS } from '../../shared/mocks/posts';

let mockPostsService: Partial<PostsService> = {
  selectPost: () => {},
  getSelectedPost: () => of(2),
};

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
      providers: [
        {
          provide: PostsService,
          useValue: { ...mockPostsService },
        },
      ],
    }).compileComponents();

    postsService = TestBed.inject(PostsService);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectPost event on click', () => {
    const postId = 1;
    spyOn(component.selectPost, 'emit');
    component.post = {
      id: postId,
      title: 'Test Post',
      body: 'Test Body',
      userId: 1,
    };
    fixture.detectChanges();
    const postElement = fixture.nativeElement.querySelector('.post');
    postElement.click();
    expect(component.selectPost.emit).toHaveBeenCalledWith(postId);
  });

  it('should set currentKey to next key on click', () => {
    component.post = MOCK_POSTS[0];
    fixture.detectChanges();
    const nextKey = component['getNextKey']();
    const postElement = fixture.nativeElement.querySelector('.post');
    postElement.click();
    expect(component.currentKey).toBe(nextKey);
  });

  it('should reset currentKey when selectedPostId changes', () => {
    component.post = MOCK_POSTS[0];
    fixture.detectChanges();
    const initialKey = component.currentKey;
    const nextKey = component['getNextKey']();
    component.onClickPost();
    expect(component.currentKey).toBe(nextKey);
    component.ngOnInit();
    expect(component.currentKey).toBe(initialKey);
  });
});
