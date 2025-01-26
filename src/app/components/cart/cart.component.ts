import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LogService } from '../../services/log.service';
import { Order } from '../../models/Order.model';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
constructor(private Auth:LogService,private Cart:CartService){}
  arr:any[]=[]
    imgurl=''
 ngOnInit(): void{
const userId=this.Auth.decode().userId

  this.Cart.getcart({userid:userId}).subscribe( {
      next: (data) => {
        this.imgurl=this.Cart.imgUrl
        if (Array.isArray(data)) {
          this.arr = data.filter((e: Order) => e.Isdeleted !== true);
        } else {
          console.error('Expected data to be an array');
        }

        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
      }
    }
  )
}
dele(data:any){
  console.log(data);
  
  this.Cart.deleorder({data}).subscribe({
    next: (response) => {
      this.ngOnInit(); // Refresh data on success
      console.log('Deletion successful:', response);
    },
    error: (err) => {
      console.error('Error during deletion:', err);
    },
  });
  
}  
editqty(value:string,data:any){
  this.Cart.qty({id:data,qty:value}).subscribe({
    next: (response) => {
      this.ngOnInit(); // Refresh data on success
      console.log('Deletion successful:', response);
    },
    error: (err) => {
      console.error('Error during deletion:', err);
    },
  });
  
  
}
}
