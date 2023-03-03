import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/Iproduct';
import { AdminService } from 'src/app/Services/admin.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { Product2Component } from '../product2/product2.component';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {
  SuccessMessage = false;
  ErrorMessage = false;
  product: IProduct = {
    _id: 1,
    ProductName: '',
    Amount: 1,
    Description: '',
    image: '',
    Price: 1,
    Category: '',
  };
  editForm = new FormGroup({
    ProductName: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
    Amount: new FormControl('', [Validators.required]),
    Price: new FormControl('', [Validators.required]),
    Category: new FormControl('', [Validators.required]),
  });
  constructor(
    private Api: ProductsApiService,
    private route: ActivatedRoute,
    private router: Router,
    private admin: AdminService
  ) {}
  ngOnInit(): void {
    let id: number;
    this.route.params.subscribe((params) => {
      id = params['id'];
      console.log(id);
      this.Api.getProductById(id).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
      window.scrollTo(0, 0);
    });
  }
  hide() {
    this.router.navigateByUrl('/DashBoard');
  }
  EditProduct() {
    this.Api.pachProduct(this.product).subscribe({
      next: (data) => {
        for (let product of this.admin.Products) {
          if (product._id == this.product._id) {
            product = Object.assign(product, this.product);
          }
        }
        this.SuccessMessage = true;
        this.ErrorMessage = false;
      },
      error: (err) => {
        this.SuccessMessage = false;
        this.ErrorMessage = true;
        console.log(err);
      },
    });
  }
}
