import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Post } from '../models/types';
import { BACKEND_URL } from '../utils/constants';
import { MOCK_POSTS } from '../mocks/posts';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all posts from backend', () => {
    service.fetchAllPosts().subscribe((posts) => {
      expect(posts).toEqual(MOCK_POSTS);
    });
    const req = httpMock.expectOne(`${BACKEND_URL}/posts`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_POSTS);
  });

  it('should handle HTTP error during fetchAllPosts', () => {
    const errorMessage = 'HTTP Error';
    service.fetchAllPosts().subscribe({
      next: () => {},
      error: (error) => {
        expect(error.statusText).toEqual(errorMessage);
      },
    });
    const req = httpMock.expectOne(`${BACKEND_URL}/posts`);
    expect(req.request.method).toBe('GET');
    req.flush('Error', { status: 400, statusText: errorMessage });
  });
});
