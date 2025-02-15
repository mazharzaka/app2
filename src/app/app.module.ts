import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import Aura from '@primeng/themes/aura';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PicComponent } from './components/pic/pic.component';
import { AllProduectComponent } from './components/all-produect/all-produect.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddprodectComponent } from './components/addprodect/addprodect.component';
import { EditComponent } from './components/edit/edit.component';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';
import { SalesComponent } from './components/sales/sales.component';
import { UserorderComponent } from './components/userorder/userorder.component';
import { WatchproduectComponent } from './components/watchproduect/watchproduect.component';
import { CategoryComponent } from './components/category/category.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'primeng/slider';
import { ToastrModule } from 'ngx-toastr';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';
import { providePrimeNG } from 'primeng/config';
import { RadioButtonModule } from 'primeng/radiobutton';
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
    WatchproduectComponent,
    CategoryComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HttpClientModule ,
    SlickCarouselModule ,
    CommonModule,
    FormsModule,
    TableModule,TagModule,
    RatingModule,
    SidebarModule,
    ButtonModule,SliderModule,
    RadioButtonModule,
    BrowserAnimationsModule, // Required for animations
    ToastrModule.forRoot({
     
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), 
  ],
  providers: [
    providePrimeNG({
      theme: {
          preset: Aura,
          
      }
  })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
