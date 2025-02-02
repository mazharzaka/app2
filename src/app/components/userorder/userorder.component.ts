import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/Order.model';

@Component({
  selector: 'app-userorder',
  standalone: false,
  
  templateUrl: './userorder.component.html',
  styleUrl: './userorder.component.css'
})
export class UserorderComponent {
constructor(private Auth:LogService,private Cart:CartService){}
  arr:any[]=[]
    imgurl=''
 ngOnInit(): void{
const userId=this.Auth.decode().userId

  this.Cart.getcart({userid:userId}).subscribe( {
      next: (data) => {
        this.imgurl=this.Cart.imgUrl
        if (Array.isArray(data)) {
          this.arr = data.filter((e: Order) => e.received === true);
        } else {
          console.error('Data is not an array:', data);
        }
        
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
}
