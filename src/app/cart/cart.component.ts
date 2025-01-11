import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { LogService } from '../log.service';
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
        this.arr=data
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
}
