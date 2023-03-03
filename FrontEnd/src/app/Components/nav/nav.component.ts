import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  Islogged = false;
  constructor(
    public Api: ProductsApiService,
    public admin: AdminService,
    private route: Router,
    public user: UserService
  ) {
    this.Islogged = localStorage.getItem('token') ? true : false;
  }

  Login() {
    this.route.navigateByUrl('/Flow');
  }
  Logout() {
    localStorage.clear();
    this.user.isLogged = false;
    this.admin.Logged = false;
    this.user.LoggedUser = null;
    this.route.navigateByUrl('/Flow');
  }
}
