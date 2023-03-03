import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProductCart } from 'src/app/Model/cartItem';
import { IProduct } from 'src/app/Model/Iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  isHovered = true;
  @Input('Product') product: IProduct = {};
  constructor(private Api: ProductsApiService, private route: Router) {}
  hover() {
    this.isHovered = false;
  }
  unhover() {
    this.isHovered = true;
  }
  clickHander() {
    this.route.navigateByUrl(`/ProductDetails/${this.product._id}`);
  }
  addTocart() {
    let Product: IProductCart = {
      ProductName: this.product.ProductName,
      Price: this.product.Price,
      image: this.product.image,
      Quantity: 1,
      _id: this.product._id,
    };
    this.Api.addToCart(Product);
  }
}
