import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PostsGridComponent } from './posts-grid/posts-grid.component';
import { SelectedPostComponent } from './selected-post/selected-post.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';

import { Post } from '../shared/models/types';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-grid-layout',
  standalone: true,
  imports: [
    PostsGridComponent,
    SelectedPostComponent,
    CommonModule,
    LoaderComponent,
  ],
  templateUrl: './grid-layout.component.html',
  styleUrl: './grid-layout.component.scss',
})
export class GridLayoutComponent implements OnInit {
  private postsService = inject(PostsService);

  readonly posts$: Observable<Post[]> = this.postsService.getPostsFromStore();
  readonly loading$: Observable<boolean> = this.postsService.isGridLoading();
  readonly error$: Observable<string | null> =
    this.postsService.getGridLoadError();
  readonly activePostId$ = this.postsService.getSelectedPost();

  ngOnInit() {
    this.postsService.intiateFetchPosts();
  }

  onClick() {}
}
