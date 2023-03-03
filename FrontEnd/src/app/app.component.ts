import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animate } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [Animate],
})
export class AppComponent {
  title = 'DEPOT';
}
