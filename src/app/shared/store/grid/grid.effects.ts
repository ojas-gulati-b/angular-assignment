import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  fetchPosts,
  fetchPostsFailure,
  fetchPostsSuccess,
} from './grid.actions';
import { ApiService } from '../../services/api.service';

@Injectable()
export class GridEffects {
  private actions$ = inject(Actions);
  private apiService = inject(ApiService);

  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(() =>
        this.apiService.fetchAllPosts().pipe(
          map((posts) => fetchPostsSuccess({ posts })),
          catchError((error) => of(fetchPostsFailure({ error: error.message })))
        )
      )
    )
  );
}
