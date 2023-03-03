import { Component, Input } from '@angular/core';
import { IDBOrder } from 'src/app/Model/DBOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  @Input() order?: IDBOrder;
}
