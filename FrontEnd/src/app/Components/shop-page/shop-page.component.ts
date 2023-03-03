import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductsApiService } from 'src/app/Services/products-api.service';
import { IProduct } from '../../Model/Iproduct';
@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
})
export class ShopPageComponent implements OnInit {
  activated = [true, false, false, false, false];
  constructor(private Api: ProductsApiService) {
    this.Api.getProducts().subscribe((data: any) => {
      this.ProductList = data;
      this.FilterList = data;
    });
  }
  ProductList: IProduct[] = [];
  FilterList: IProduct[] = [];
  ngOnInit(): void {}
  Filter(ele: any) {
    this.activated = [false, false, false, false, false];
    switch (ele.innerText) {
      case 'Home Decor':
        this.FilterList = this.ProductList.filter(
          (item) => item.Category == 'Home Decor'
        );
        this.activated[1] = true;
        break;
      case 'DECORATION':
        this.FilterList = this.ProductList.filter(
          (item) => item.Category == 'Decoration'
        );
        this.activated[2] = true;
        break;
      case 'Furniture':
        this.FilterList = this.ProductList.filter(
          (item) => item.Category == 'Furniture'
        );
        this.activated[3] = true;
        break;
      case 'Lighting':
        this.FilterList = this.ProductList.filter(
          (item) => item.Category == 'Lighting'
        );
        this.activated[4] = true;
        break;
      default:
        this.activated[0] = true;
        this.FilterList = this.ProductList;
    }
  }
}
