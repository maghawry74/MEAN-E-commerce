import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductCart } from 'src/app/Model/cartItem';
import { IProduct } from 'src/app/Model/Iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  constructor(public Api: ProductsApiService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.Api.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  product: IProduct = {};
  Quantity: number = 1;
  fun(e: HTMLInputElement, str: string) {
    if ((str = 'i')) {
      this.Quantity++;
      this.Api.increaseQuantity({ ...this.product, Quantity: this.Quantity });
    } else {
      this.Quantity--;
      this.Api.decreaseQuantity({ ...this.product, Quantity: this.Quantity });
    }
  }
  addtocart() {
    this.Api.addToCart({ ...this.product, Quantity: this.Quantity });
  }
}
