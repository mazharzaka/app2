import { Component } from '@angular/core';
import { LogService } from '../log.service';
import { CartService } from '../cart.service';

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
        this.arr=data.filter((e:any) => e.received ===true);
        // console.log(data);
        
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
