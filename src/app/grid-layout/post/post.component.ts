import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

import { Post } from '../../shared/models/types';
import { DEFAULT_DISPLAY_KEY } from '../../shared/utils/constants';
import { PostsService } from '../../shared/services/posts.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit, OnChanges, OnDestroy {
  @Input({ required: true }) post?: Post;

  @Output() selectPost: EventEmitter<number> = new EventEmitter();

  private postsService = inject(PostsService);

  private destroyed$: Subject<void> = new Subject<void>();
  readonly selectedPostId$: Observable<number | null> =
    this.postsService.getSelectedPost();
  private keys: Array<keyof Post> = [];
  currentKey: keyof Post = DEFAULT_DISPLAY_KEY;

  ngOnInit() {
    this.selectedPostId$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((id) => this.resetDisplayKey(id));
  }

  ngOnChanges() {
    if (this.post) {
      this.keys = Object.keys(this.post) as Array<keyof Post>;
    }
  }

  private getNextKey(): keyof Post {
    const currentKeyIndex = this.keys.findIndex(
      (key) => this.currentKey === key
    );
    const nextKeyindex =
      currentKeyIndex === this.keys.length - 1 ? 0 : currentKeyIndex + 1;
    return this.keys[nextKeyindex];
  }

  private resetDisplayKey(id: number | null) {
    if (id !== this.post?.id) {
      this.currentKey = DEFAULT_DISPLAY_KEY;
    }
  }

  onClickPost() {
    this.currentKey = this.getNextKey();
    this.selectPost.emit(this.post?.id);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
