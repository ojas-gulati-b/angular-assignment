import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/types';
import { BACKEND_URL } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  fetchAllPosts(): Observable<Post[]> {
    const url = `${BACKEND_URL}/posts`;
    return this.http.get<Post[]>(url);
  }
}
