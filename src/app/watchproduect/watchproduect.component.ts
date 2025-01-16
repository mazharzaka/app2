import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-watchproduect',
  standalone: false,
  
  templateUrl: './watchproduect.component.html',
  styleUrl: './watchproduect.component.css'
})
export class WatchproduectComponent {
  constructor(private route: ActivatedRoute,private Api : ApiService,private Auth:LogService,private Cart:CartService ) { }
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
    this.Cart.Addtocart({produect:id,userid:userId,qty:1,status:true,received:false}).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });
    }
}
