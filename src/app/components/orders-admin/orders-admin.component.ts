import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-orders-admin',
  standalone: false,
  
  templateUrl: './orders-admin.component.html',
  styleUrl: './orders-admin.component.css'
})
export class OrdersAdminComponent {
arr:any=[]
imgurl=''
constructor(private _http:CartService){}
ngOnInit(){
this._http.getadmin().subscribe({
  next:(data:any)=>{
    console.log(data);
    this.imgurl=this._http.imgUrl

    this.arr=data
  },
  error:(err)=>{
console.log(err);

  }
})
}
delivery(id:any){
  
this._http.staus({id:id}).subscribe({
  next:(data)=>{
    console.log(data);
    this.arr=data
    
  },
  error:()=>{
    console.log("err");
  }
})
}
received(id:any){
  
  this._http.received({id:id}).subscribe({
    next:(data)=>{
      console.log(data);
      this.arr=data
      
    },
    error:()=>{
      console.log("err");
    }
  })
  }
}
