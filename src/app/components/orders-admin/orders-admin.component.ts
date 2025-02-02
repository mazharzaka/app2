import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/Order.model';
import { LogService } from '../../services/log.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-admin',
  standalone: false,
  
  templateUrl: './orders-admin.component.html',
  styleUrl: './orders-admin.component.css'
})
export class OrdersAdminComponent {
arr:any=[]
filteredItems:any=[]
total=0
imgurl=''
status=''
constructor(private _http:CartService,private toastr: ToastrService,private Auth:LogService){}
ngOnInit(){
this._http.getadmin().subscribe({
  next:(data:any)=>{
    console.log(data);
    this.imgurl=this._http.imgUrl

    this.arr=data
   this.filteredItems= data[0]?.cartItem.filter(((item:any) => !item.Isdeleted && item.CheckOut))
   this.total=this.filteredItems.reduce((a:any,b:any)=>a+b.qty*b.productId.price,0)
  },
  error:(err)=>{
console.log(err);

  }
})
}

onStatusChange(e:any,userId:any){
// const userId=this.Auth.decode().userId
  console.log(this.status);
  
  this._http.staus({status:this.status,userid:userId}).subscribe({
    next: (response) => {
      // this.ngOnInit(); // Refresh data on success
      console.log('Deletion successful:', this.status);
      this.toastr.success('Deletion successful!', 'Success');


    },
    error: (err) => {
      console.error('Error during deletion:', status);
    },
  });
  
}

}
