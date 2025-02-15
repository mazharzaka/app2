import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LogService } from '../../services/log.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-produect',
  standalone: false,
  
  templateUrl: './all-produect.component.html',
  styleUrl: './all-produect.component.css'
})
export class AllProduectComponent {
  arr:any[]=[]
  imgurl=''
length:number=0
constructor(private apiService:ApiService,private toastr: ToastrService,private Auth:LogService,private Cart:CartService,private route:Router){}
  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{
      // console.log(data);
      this.imgurl=this.apiService.imgUrl
      this.arr=data.filter(e=>e.Isdeleted!==true)
      // this.length = this.arr?.reduce((a, b) => a + b.qty, 0)
      // this.Cart.updateCartCount(this.length);
    })
  }
addtocart(id:any){
// console.log(id);
// console.log(this.Auth.decode().userId);
const userId=this.Auth.decode().userId
console.log(id,userId);
this.Cart.Addtocart({ 
  productId: id, 
  userid: userId, 
  qty: 1, 

}).subscribe({
  next: (response) => {
    this.toastr.success('Item added to cart successfully!', 'Success');
    this.Cart?.updateCartCount(response.cartItem?.reduce((a, b) => a + b.qty, 0));
  
    
  
  },
  error: (err) => {
    this.toastr.error('Failed to add item to cart. Please try again.', 'Error');
    console.error('Error adding to cart:', err);
  }
});
}
Watch(id:any){
  this.route.navigate(['/details'],{queryParams:{id:id}});


}
}
