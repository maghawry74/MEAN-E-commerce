import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Model/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  Logged = false;
  connectionString: string = 'http://127.0.0.1:5000/products';
  orderConnectionString: string = 'http://localhost:5000/orders';
  token?: string;
  Products: IProduct[] = [];
  headers?: HttpHeaders;
  constructor(private http: HttpClient) {
    this.Logged = localStorage.getItem('token') == null ? false : true;
    http.get(this.connectionString).subscribe((data: any) => {
      this.Products = data;
    });
    if (localStorage.getItem('AdminToken') != null) {
      this.Logged = true;
    }
  }
  getProducts() {
    return this.Products;
  }
  DeleteProduct(id?: number, image?: string) {
    let token = `Bearer ${localStorage.getItem('AdminToken')}`;
    return this.http.delete(this.connectionString, {
      headers: new HttpHeaders({
        Authorization: token,
        'Content-type': 'application/Json',
      }),
      body: { id, image },
    });
  }
  AddProduct(data: FormData) {
    let token = `Bearer ${localStorage.getItem('AdminToken')}`;
    let headers = new HttpHeaders({ Authorization: token });
    return this.http.post<IProduct>(this.connectionString, data, {
      headers: headers,
    });
  }
  getOrders() {
    return this.http.get(this.orderConnectionString);
  }
}
