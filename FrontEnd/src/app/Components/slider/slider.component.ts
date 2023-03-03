import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  Activated = [false, false, true, false, false];
  activate(num: number) {
    for (let item in this.Activated) {
      this.Activated[item] = false;
    }
    this.Activated[num] = true;
  }
  // currentSlide = 0;
  // slider = ['0', '100', '200'];
  // slide() {
  //   for (var i = 0; i < this.slider.length; i++) {
  //     this.slider[i] = `${(i - this.currentSlide) * 100}`;
  //   }
  //   console.log(this.slider);
  // }
  // Next() {
  //   this.currentSlide++;
  //   this.currentSlide = this.currentSlide > 2 ? 0 : this.currentSlide;
  //   this.slide();
  //   console.log('next');
  // }
  // Prev() {
  //   this.currentSlide--;
  //   this.currentSlide = this.currentSlide < 0 ? 2 : this.currentSlide;
  //   this.slide();
  //   console.log('Prev');
  // }
}
