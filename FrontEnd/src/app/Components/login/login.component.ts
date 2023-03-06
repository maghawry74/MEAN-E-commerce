import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginDetails = {
    Email: '',
    Password: '',
    result: false,
  };
  previousUrl = '/Products';
  constructor(
    private http: HttpClient,
    private Admin: AdminService,
    private route: Router,
    private user: UserService,
    private Api: ProductsApiService
  ) {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe({
        next: (eve: any) => {
          this.previousUrl = eve.url;
        },
      });
  }
  Check(e: Event) {
    e.preventDefault();
    this.http.post('http://localhost:5000/Login', this.LoginDetails).subscribe({
      next: this.successfulLogin,
      error: this.failedLogin,
    });
  }

  private successfulLogin = (data: any) => {
    this.LoginDetails.result = false;
    if (data.role == 'Admin') {
      this.Admin.token = data.token;
      this.Admin.Logged = true;
      localStorage.setItem('AdminToken', data.token);
      this.user.isLogged = true;
      this.route.navigateByUrl('/DashBoard');
    } else {
      this.user.token = data.token;
      this.user.isLogged = true;
      this.user.LoggedUser = data.user;
      localStorage.setItem('User', JSON.stringify(this.user.LoggedUser));
      localStorage.setItem('UserToken', data.token);
      if (this.Api.getCartCount() != 0) {
        this.route.navigateByUrl('/Cart');
      } else {
        this.route.navigateByUrl('/Products');
      }
    }
  };
  private failedLogin = () => {
    this.LoginDetails.result = true;
  };
}
