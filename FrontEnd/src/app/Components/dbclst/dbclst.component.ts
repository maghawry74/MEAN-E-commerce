import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Model/Iproduct';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-dbclst',
  templateUrl: './dbclst.component.html',
  styleUrls: ['./dbclst.component.css'],
})
export class DBCLstComponent {
  @Input() products: IProduct[] = [];
  activated = 'Products';
  constructor(private route: Router, public Api: AdminService) {}
  ShowNewProductForm() {
    this.route.navigateByUrl('DashBoard/new');
  }
  changePanel(str: string) {
    this.activated = str;
  }
}
