import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IDBOrder } from 'src/app/Model/DBOrder';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  @Input() order?: IDBOrder;
  constructor(private admin: AdminService, private route: Router) {}
  FinishOder() {
    this.admin.patchOrder({ _id: this.order?._id }).subscribe({
      next: () => {
        this.admin.orders = this.admin.orders.filter(
          (product) => product._id != this.order?._id
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
