import { Component } from '@angular/core';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GridLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-assignment';
}
