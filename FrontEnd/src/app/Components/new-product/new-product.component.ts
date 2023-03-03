import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/Model/Iproduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  img = 'assets/imgs/image-1@2x.jpg';
  @Input() HiddenFlag = true;
  successMessageFlag = false;
  failureMessageFlag = false;
  formdata = new FormData();
  newProduct: IProduct = {};
  newProductForm = new FormGroup({
    ProductName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required, Validators.min(1)]),
    Amount: new FormControl('', [Validators.required, Validators.min(0)]),
    Category: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  constructor(private APi: AdminService, private route: Router) {}
  submit(e: Event) {
    this.formdata.append(
      'ProductName',
      this.newProductForm.get('ProductName')?.value!
    );
    this.formdata.append(
      'Description',
      this.newProductForm.get('Description')?.value!
    );
    this.formdata.append('Price', this.newProductForm.get('Price')?.value!);
    this.formdata.append('Amount', this.newProductForm.get('Amount')?.value!);
    this.formdata.append(
      'Category',
      this.newProductForm.get('Category')?.value!
    );
    this.APi.AddProduct(this.formdata).subscribe({
      next: (data: any) => {
        this.newProductForm.reset();
        this.formdata.delete('ProductName');
        this.formdata.delete('Description');
        this.formdata.delete('Price');
        this.formdata.delete('Amount');
        this.formdata.delete('Category');
        this.formdata.delete('image');
        console.log(data);
        this.failureMessageFlag = false;
        this.successMessageFlag = true;
        this.APi.Products.push(data.data);
      },
      error: (error) => {
        this.successMessageFlag = false;
        this.failureMessageFlag = true;
        console.log(error);
      },
    });
  }
  AddFile(e: any, image: any) {
    this.formdata.append('image', e.target.files[0]);
    image.src = URL.createObjectURL(e.target.files[0]);
  }
  hide() {
    this.route.navigateByUrl('/DashBoard');
  }
}
