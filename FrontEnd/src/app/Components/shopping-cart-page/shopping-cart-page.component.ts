import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProductCart } from 'src/app/Model/cartItem';
import { IProduct } from 'src/app/Model/Iproduct';
import { IOrder } from 'src/app/Model/order';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.css'],
})
export class ShoppingCartPageComponent {
  successPurchase = false;
  constructor(
    public Api: ProductsApiService,
    private route: Router,
    private user: UserService
  ) {}
  Remove(id: IProductCart) {
    this.Api.removeFromCart(id);
  }
  goToShop() {
    this.route.navigateByUrl('/Products');
  }
  SubmitOreder() {
    if (!this.user.isLogged) {
      this.route.navigateByUrl('/Flow/Login');
      return;
    }
    console.log(this.user.LoggedUser);
    this.user.postOrder(this.prepareOrder()).subscribe({
      next: (data) => {
        this.Api.clearCart();
        this.Api.totalPrice = 0;
        this.successPurchase = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  prepareOrder(): IOrder {
    let Products = [];
    let Cart = this.Api.getcart();
    for (let item of Cart) {
      Products.push({ Quantity: item.Quantity, Product: item._id });
    }
    return {
      user: this.user.LoggedUser?._id!,
      Products: Products,
      Price: this.Api.totalPrice,
    };
  }
}
