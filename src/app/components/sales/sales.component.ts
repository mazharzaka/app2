import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-sales',
  standalone: false,
  
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
arr:any[]=[]
imgurl='';
total:number=0
constructor(private _http:CartService){}
ngOnInit(){
this._http.getadmin().subscribe({
  next:(data:any)=>{
    console.log(data);
    this.imgurl=this._http.imgUrl
    this.arr=data.filter((e:any) => e.received ===true);
    this.total= this.arr.reduce((a, b) =>  a + b.qty * b.produect.price, 0)
    console.log(this.total);
    
  },
  error:(err)=>{
console.log(err);

  }
})
}
}
