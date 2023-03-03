import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sponser',
  templateUrl: './sponser.component.html',
  styleUrls: ['./sponser.component.css'],
})
export class SponserComponent {
  ishidden = true;
  @Input('src') image: string = '';
  hover() {
    this.ishidden = false;
  }
  leave() {
    this.ishidden = true;
  }
}
