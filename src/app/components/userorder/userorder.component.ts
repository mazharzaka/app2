import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-userorder',
  standalone: false,
  
  templateUrl: './userorder.component.html',
  styleUrl: './userorder.component.css'
})
export class UserorderComponent {constructor(private Auth:LogService,private Order:OrdersService){}
  arr:any[]=[]
  imgurl='http://localhost:3000/'
   length:number=0
   checkOut=false;
   total:number=0;
   loodOrder(){
    const userId=this.Auth.decode().userId

  this.Order.getdata({userid:userId}).subscribe( {
      next: (data) => {

        if (Array.isArray(data)) {
          this.arr=data.flatMap((item:any)=>item.items)
          this.length = this.arr?.reduce((a, b) => a + b.qty, 0)
          this.Order.updateOrderCount(this.length);
         
          this.total=data.reduce((a:any,b:any)=>a+b.totalPriceOrder,0)

          
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
  
 ngOnInit(): void{
this.loodOrder()
}
 }