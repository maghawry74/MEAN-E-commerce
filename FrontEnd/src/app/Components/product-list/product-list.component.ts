import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private Api: ProductsApiService) {
    this.Api.getProducts().subscribe((data: any) => {
      this.productList = data;
    });
  }
  productWidth = 350;
  @ViewChild('carousel') carousel?: ElementRef;
  @ViewChild('prod') product?: ElementRef;
  productList = [];

  Next() {
    this.carousel!.nativeElement.scrollLeft +=
      this.carousel!.nativeElement.clientWidth + 24;
  }
  Prev() {
    this.carousel!.nativeElement.scrollLeft -=
      this.carousel!.nativeElement.clientWidth + 24;
  }
}
