import { Component } from '@angular/core';

@Component({
  selector: 'app-review-slider',
  templateUrl: './review-slider.component.html',
  styleUrls: ['./review-slider.component.css'],
})
export class ReviewSliderComponent {
  currentSlide = 0;
  slider = ['0', '100', '200'];
  slide() {
    for (var i = 0; i < this.slider.length; i++) {
      this.slider[i] = `${(i - this.currentSlide) * 100}`;
    }
    console.log(this.slider);
  }
  Next() {
    this.currentSlide++;
    this.currentSlide = this.currentSlide > 2 ? 0 : this.currentSlide;
    this.slide();
    console.log('next');
  }
  Prev() {
    this.currentSlide--;
    this.currentSlide = this.currentSlide < 0 ? 2 : this.currentSlide;
    this.slide();
    console.log('Prev');
  }
}
