import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Animate } from 'src/app/animation';
import { IProduct } from 'src/app/Model/Iproduct';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations: [Animate],
})
export class AdminPageComponent {
  constructor(public Api: AdminService, public route: Router) {
    if (localStorage.getItem('AdminToken') == null) {
      route.navigateByUrl('/Flow');
    }
  }
}
