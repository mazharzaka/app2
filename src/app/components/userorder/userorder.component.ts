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
export class UserorderComponent {constructor(private Auth:LogService,private Cart:CartService){}
  arr:any[]=[]
  imgurl='http://localhost:3000/'
   length:number=0
   checkOut=false;
   total:number=0;
 ngOnInit(): void{
const userId=this.Auth.decode().userId

  this.Cart.getMyorders({userid:userId}).subscribe( {
      next: (data) => {

        if (Array.isArray(data)) {
          this.arr=data[0].cartItem?.filter((e:any)=>e.Isdeleted!==true)
          this.length = this.arr?.reduce((a, b) => a + b.qty, 0)
          this.Cart.updateOrderCount(this.length);
         
          this.total=data[0]._doc?.totalPriceOrder



          
       ;
        } else {
          console.error('Expected data to be an array');
        }

        // console.log(data);
        
      },
      error: (err) => {
        console.log(err);
      }
    }
  )
}
}
