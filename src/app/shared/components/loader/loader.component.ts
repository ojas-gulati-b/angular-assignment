import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  /**
   * text to show below loading icon
   */
  @Input() loaderText = '';
  /**
   * default text to show below loading icon if input not passed
   */
  defaultText = 'Loading';
}
