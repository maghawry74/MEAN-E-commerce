import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent {
  active = 'ABOUT US';
  fun(e: any) {
    switch (e.target.innerHTML) {
      case 'SERVICES':
        this.active = 'SERVICES';
        break;
      case 'ABOUT US':
        this.active = 'ABOUT US';
        break;
      case 'STORY':
        this.active = 'STORY';
    }
  }
}
