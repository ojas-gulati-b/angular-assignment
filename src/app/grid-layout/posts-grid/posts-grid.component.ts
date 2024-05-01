import { CommonModule } from '@angular/common';
import { Component, Input, inject, OnInit } from '@angular/core';
import { Post } from '../../shared/models/types';

import { PostComponent } from '../post/post.component';

import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-posts-grid',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './posts-grid.component.html',
  styleUrl: './posts-grid.component.scss',
})
export class PostsGridComponent {
  @Input() posts: Post[] = [];

  private postsService = inject(PostsService);

  onSelectPost(id: number) {
    this.postsService.selectPost(id);
  }
}
