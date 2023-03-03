import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../Model/order';
import { Iuser } from '../Model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  registerConnectionString = 'http://localhost:5000/register';
  OrderConnectionString = 'http://localhost:5000/orders';
  token: string = '';
  isLogged = false;
  LoggedUser: Iuser | null = {
    FirstName: '',
    LastName: '',
    Address: { City: '', governorate: '' },
    Email: '',
    Phone: '',
    Password: '',
    _id: '',
  };
  constructor(private http: HttpClient) {
    if (
      localStorage.getItem('AdminToken') != null ||
      localStorage.getItem('UserToken') != null
    ) {
      this.LoggedUser = JSON.parse(localStorage.getItem('User')!);
      console.log(this.LoggedUser);
      this.isLogged = true;
    }
  }

  RegisterUser(user: Iuser) {
    return this.http.post<Iuser>(this.registerConnectionString, user);
  }
  checkUserByEmail(Email: string) {
    return this.http.get(`${this.registerConnectionString}/check/${Email}`);
  }
  checkUserByPhone(Phone: string) {
    return this.http.get(`${this.registerConnectionString}/${Phone}`);
  }
  postOrder(order: IOrder) {
    let token = `Bearer ${localStorage.getItem('UserToken')}`;
    let headers = new HttpHeaders({ Authorization: token });
    return this.http.post<IOrder>(this.OrderConnectionString, order, {
      headers,
    });
  }
}
