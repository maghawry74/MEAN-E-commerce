import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Model/Iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
})
export class Product2Component {
  isHoverd = false;
  @Input() product: IProduct = {};
  constructor(private Api: ProductsApiService, private route: Router) {}
  clickHandler() {
    this.route.navigateByUrl(`/ProductDetails/${this.product._id}`);
  }
}
