import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { gardGuard } from './guards/gard.guard';
import { AddprodectComponent } from './components/addprodect/addprodect.component';
import { EditComponent } from './components/edit/edit.component';
import { dashGuard } from './guards/dash.guard';
import { OrdersAdminComponent } from './components/orders-admin/orders-admin.component';
import { SalesComponent } from './components/sales/sales.component';
import { UserorderComponent } from './components/userorder/userorder.component';
import { WatchproduectComponent } from './components/watchproduect/watchproduect.component';
import { CategoryComponent } from './components/category/category.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [gardGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "cart",
    canActivate: [gardGuard],
    children: [
      { path: "", component: CartComponent },
      { path: "update", component: UserorderComponent }
    ]
  },
  {
    path: "details",
    component: WatchproduectComponent,
    canActivate: [gardGuard]
  },
  {
    path: "filter",
    component: CategoryComponent,
    canActivate: [gardGuard]
  },
  {
    path: "admin",
    canActivate: [dashGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "orders", component: OrdersAdminComponent },
      { path: "sales", component: SalesComponent },
      { path: "add-product", component: AddprodectComponent },
      { path: "edit", component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
