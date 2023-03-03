import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(
    private http: HttpClient,
    private Admin: AdminService,
    private route: Router
  ) {
    if (localStorage.getItem('AdminToken') != undefined) {
      route.navigateByUrl('/DashBoard');
    }
  }
}
