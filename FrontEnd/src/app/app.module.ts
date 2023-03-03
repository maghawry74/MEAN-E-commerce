import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsApiService } from './Services/products-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './Components/slider/slider.component';
import { NavComponent } from './Components/nav/nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ReviewSliderComponent } from './Components/review-slider/review-slider.component';
import { SponserComponent } from './Components/sponser/sponser.component';
import { Product2Component } from './Components/product2/product2.component';
import { ShopPageComponent } from './Components/shop-page/shop-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ProductDetailsPageComponent } from './Components/product-details-page/product-details-page.component';
import { ShoppingCartPageComponent } from './Components/shopping-cart-page/shopping-cart-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { AdminPageComponent } from './Components/admin-page/admin-page.component';
import { AdminProductComponent } from './Components/admin-product/admin-product.component';
import { NewProductComponent } from './Components/new-product/new-product.component';
import { AdminService } from './Services/admin.service';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DBCLstComponent } from './Components/dbclst/dbclst.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderListComponent } from './Components/order-list/order-list.component';
import { SuccessfulPurchaseComponent } from './Components/successful-purchase/successful-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ReviewSliderComponent,
    SponserComponent,
    Product2Component,
    ShopPageComponent,
    HomePageComponent,
    AboutPageComponent,
    ProductDetailsPageComponent,
    ShoppingCartPageComponent,
    LoginPageComponent,
    AdminPageComponent,
    AdminProductComponent,
    NewProductComponent,
    EditFormComponent,
    NotFoundComponent,
    DBCLstComponent,
    RegisterComponent,
    LoginComponent,
    OrderComponent,
    OrderListComponent,
    SuccessfulPurchaseComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProductsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
