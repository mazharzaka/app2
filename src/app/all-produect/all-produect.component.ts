import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { LogService } from '../log.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-produect',
  standalone: false,
  
  templateUrl: './all-produect.component.html',
  styleUrl: './all-produect.component.css'
})
export class AllProduectComponent {
  arr:any[]=[]
    imgurl=''

constructor(private apiService:ApiService,private Auth:LogService,private Cart:CartService){}
  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{
      console.log(data);
      this.imgurl=this.apiService.imgUrl
      this.arr=data
    })
  }
addtocart(id:any){
console.log(id);
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
