import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  orders = [];
  constructor(private Admin: AdminService) {
    Admin.getOrders().subscribe({
      next: (data: any) => {
        this.orders = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
