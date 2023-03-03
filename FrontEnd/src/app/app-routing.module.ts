import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { DBCLstComponent } from './Components/dbclst/dbclst.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { LoginComponent } from './Components/login/login.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductDetailsPageComponent } from './Components/product-details-page/product-details-page.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { ShoppingCartPageComponent } from './Components/shopping-cart-page/shopping-cart-page.component';
import { SuccessfulPurchaseComponent } from './Components/successful-purchase/successful-purchase.component';

const routes: Routes = [
  { path: 'Home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'Products', component: ShopPageComponent, pathMatch: 'full' },
  { path: 'AboutUs', component: AboutPageComponent, pathMatch: 'full' },
  {
    path: 'DashBoard',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: 'ProductsList', pathMatch: 'full' },
      { path: 'Products/:id', component: EditFormComponent, pathMatch: 'full' },
      { path: 'new', component: NewProductComponent, pathMatch: 'full' },
      {
        path: 'ProductsList',
        component: DBCLstComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'Flow',
    component: LoginPageComponent,
    children: [
      { path: '', redirectTo: 'Login', pathMatch: 'full' },
      { path: 'Login', component: LoginComponent, pathMatch: 'full' },
      { path: 'Register', component: RegisterComponent, pathMatch: 'full' },
    ],
  },
  {
    path: 'ProductDetails/:id',
    component: ProductDetailsPageComponent,
    pathMatch: 'full',
  },
  { path: 'Cart', component: ShoppingCartPageComponent, pathMatch: 'full' },
  { path: 'test', component: SuccessfulPurchaseComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
