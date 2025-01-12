import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PicComponent } from './pic/pic.component';
import { AllProduectComponent } from './all-produect/all-produect.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddprodectComponent } from './addprodect/addprodect.component';
import { EditComponent } from './edit/edit.component';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { SalesComponent } from './sales/sales.component';
import { UserorderComponent } from './userorder/userorder.component';
import { WatchproduectComponent } from './watchproduect/watchproduect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    PicComponent,
    AllProduectComponent,
    CartComponent,
    DashboardComponent,
    AddprodectComponent,
    EditComponent,
    OrdersAdminComponent,
    SalesComponent,
    UserorderComponent,
    WatchproduectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    SlickCarouselModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
