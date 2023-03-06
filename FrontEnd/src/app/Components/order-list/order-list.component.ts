import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  orders = [];
  constructor(public Admin: AdminService) {
    Admin.getOrders(0).subscribe({
      next: (data: any) => {
        this.Admin.orders = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  update(ele: any) {
    this.Admin.getOrders(ele.value).subscribe({
      next: (data: any) => {
        this.Admin.orders = data.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
