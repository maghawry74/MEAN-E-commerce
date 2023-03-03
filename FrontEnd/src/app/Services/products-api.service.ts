import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Model/Iproduct';
import { IProductCart } from '../Model/cartItem';
@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  Products: IProduct[] = [];
  connectionString: string = 'http://127.0.0.1:5000/products';
  FeaturedProducts = [];
  totalPrice: number = 0;
  private cart: IProductCart[] = [];
  constructor(private http: HttpClient) {
    http.get(this.connectionString).subscribe((data: any) => {
      this.Products = data;
      this.FeaturedProducts = data;
    });
  }
  getProducts() {
    return this.http.get(this.connectionString);
  }
  getProductById(id: number) {
    return this.http.get(`${this.connectionString}/${id}`);
  }
  pachProduct(product: IProduct) {
    console.log(product);
    let token = `Bearer ${localStorage.getItem('AdminToken')}`;
    let headers = new HttpHeaders({ Authorization: token });
    console.log(product);
    return this.http.patch(this.connectionString, product, { headers });
  }
  getcart() {
    return this.cart;
  }
  clearCart() {
    this.cart = [];
  }
  addToCart(Item: IProductCart) {
    if (!this.Exists(Item)) {
      this.totalPrice += Item.Price! * Item.Quantity;
      this.cart.push(Item);
    }
  }
  increaseQuantity(item: IProductCart) {
    this.addToCart(item);
  }
  decreaseQuantity(product: IProductCart) {
    for (let item of this.cart) {
      if (item._id == product._id) {
        if (item.Quantity != 1) {
          item.Quantity--;
          this.totalPrice -= product.Price!;
        }
      }
    }
  }
  removeFromCart(Item: IProductCart) {
    this.totalPrice -= Item.Price! * Item?.Quantity!;
    this.cart = this.cart.filter((item) => item._id != Item._id);
  }
  getCartCount() {
    return this.cart.length;
  }
  private Exists(Item: IProductCart) {
    for (let item of this.cart) {
      if (item._id == Item._id) {
        item.Quantity++;
        this.totalPrice += item.Price!;
        return true;
      }
    }
    return false;
  }
}
