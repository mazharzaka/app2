import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LogService } from '../../services/log.service';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-watchproduect',
  standalone: false,
  
  templateUrl: './watchproduect.component.html',
  styleUrl: './watchproduect.component.css'
})
export class WatchproduectComponent {
  constructor(private route: ActivatedRoute,private toastr: ToastrService,private Api : ApiService,private Auth:LogService,private Cart:CartService ) { }
  productId: any;
  product: any
  imgurl=''

  ngOnInit(): void { 
    this.route.queryParamMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log(this.productId);
      this.Api.details({id:this.productId}).subscribe(data=>{
        this.imgurl=this.Api.imgUrl
    
        this.product=data;
       
        // console.log(this.product);
      })

   })}
   addtocart(id:any){
    // console.log(id);
    console.log(this.Auth.decode().userId);
    const userId=this.Auth.decode().userId
    this.Cart.Addtocart({ 
      productId: id, 
      userid: userId, 
      qty: 1, 
    
    }).subscribe({
      next: (response) => {
        this.toastr.success('Item added to cart successfully!', 'Success');
        // console.log('Addition successful', this.toastr);
      },
      error: (err) => {
        this.toastr.error('Failed to add item to cart. Please try again.', 'Error');
        console.error('Error adding to cart:', err);
      }
    });
  }}
