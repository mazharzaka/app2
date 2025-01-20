import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { gardGuard } from './gards/gard.guard';
import { AddprodectComponent } from './addprodect/addprodect.component';
import { EditComponent } from './edit/edit.component';
import { dashGuard } from './gards/dash.guard';
import { OrdersAdminComponent } from './orders-admin/orders-admin.component';
import { SalesComponent } from './sales/sales.component';
import { UserorderComponent } from './userorder/userorder.component';
import { WatchproduectComponent } from './watchproduect/watchproduect.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[gardGuard]},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"cart",component:CartComponent,canActivate:[gardGuard]},
  {path:"details",component:WatchproduectComponent,canActivate:[gardGuard]},
  {path:"UpdateCart",component:UserorderComponent,canActivate:[gardGuard]},
  {path:"filter",component:CategoryComponent,canActivate:[gardGuard]},
  {path:"admin",component:DashboardComponent,canActivate:[dashGuard]},
  {path:"edit",component:EditComponent,canActivate:[dashGuard]},
  {path:"admin/orders",component:OrdersAdminComponent,canActivate:[dashGuard]},
  {path:"admin/sales",component:SalesComponent,canActivate:[dashGuard]},
  {path:"admin/addproduect",component:AddprodectComponent,canActivate:[dashGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
