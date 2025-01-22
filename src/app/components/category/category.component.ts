import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LogService } from '../../services/log.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  arr:any[]=[]
  private originalArr: any[] = [];
    imgurl=''
    selectedOptionFromChild: string = '';
    selectedPriceFromChild: number = 1000;
    selectedstFromChild: boolean | undefined=undefined;
    ngOnInit(): void {
      this.apiService.getData().subscribe(data => {
        this.imgurl = this.apiService.imgUrl;
        this.originalArr = data.filter(e => e.Isdeleted !== true);
        this.arr = [...this.originalArr];
      });
    }
    constructor(private apiService:ApiService,private Auth:LogService,private Cart:CartService,private route:Router){}
    handleFilter(option: string, isStockOption: boolean|undefined,price:number): void {
      this.selectedOptionFromChild = option;
      this.selectedstFromChild = isStockOption;
    this.selectedPriceFromChild=price
      console.log('Selected Option from Sidebar:', this.selectedOptionFromChild);
      console.log('Selected Stock Option:', this.selectedstFromChild);
      console.log('Selected Stock Option:', this.selectedPriceFromChild);
    
      this.arr = this.originalArr.filter(e => {
        const categoryMatch = 
          this.selectedOptionFromChild === '' || 
          this.selectedOptionFromChild === 'All' || 
          e.category === this.selectedOptionFromChild;
    
        const stockMatch = 
          this.selectedstFromChild === undefined || 
          e.Isstock === this.selectedstFromChild;
          const priceMatch = 
          
          e.price <this.selectedPriceFromChild;
    
        return categoryMatch && stockMatch&&priceMatch;
      });
    
      console.log('Filtered Array:', this.arr);
    }
    
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
  
  Watch(id:any){
    this.route.navigate(['/details'],{queryParams:{id:id}});
    // console.log(this.filter.processCategory("men"));
  }
}
