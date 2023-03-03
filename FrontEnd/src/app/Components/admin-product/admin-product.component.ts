import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/Iproduct';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
})
export class AdminProductComponent {
  constructor(
    private APi: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  @Input() product: IProduct = {};
  DeleteProduct(id?: number, image?: string) {
    this.APi.DeleteProduct(id, image).subscribe({
      next: (data) => {
        this.APi.Products = this.APi.Products.filter((item) => item._id != id);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  EditProduct(product: IProduct) {
    this.router.navigateByUrl('DashBoard/Products/' + product._id);
  }
}
