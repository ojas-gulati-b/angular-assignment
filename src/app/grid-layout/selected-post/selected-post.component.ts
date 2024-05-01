import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected-post.component.html',
  styleUrl: './selected-post.component.scss',
})
export class SelectedPostComponent {
  @Input() selectedId: number | null = null;
}
