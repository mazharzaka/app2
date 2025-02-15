import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LogService } from '../../services/log.service';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    selectedPriceFromChild: number = 4000;
    selectedstFromChild: boolean | undefined=undefined;
    ngOnInit(): void {
      this.apiService.getData().subscribe(data => {
        this.imgurl = this.apiService.imgUrl;
        this.originalArr = data.filter(e => e.Isdeleted !== true);
        this.arr = [...this.originalArr];
        // Refresh data on success

        console.log('Data:', data); 
        
      });
    }
    constructor(private apiService:ApiService,private toastr: ToastrService,private Auth:LogService,private Cart:CartService,private route:Router){}
    handleFilter(option: string, isStockOption: boolean|undefined,price:number): void {
      this.selectedOptionFromChild = option;
      this.selectedstFromChild = isStockOption;
      this.selectedPriceFromChild=price
      // console.log('Selected Option from Sidebar:', this.selectedOptionFromChild===this.originalArr[4].category);
      // console.log('Selected Stock Option:', this.selectedstFromChild);
      // console.log('Selected Stock Option:', this.selectedPriceFromChild);
    
      this.arr = this.originalArr.filter(e => {
        const categoryMatch = 
          this.selectedOptionFromChild === '' || 
          this.selectedOptionFromChild === 'All' || 
          // console.log(e.category === this.selectedOptionFromChild);
        
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
    this.Cart.Addtocart({ 
      productId: id, 
      userid: userId, 
      qty: 1, 
      status: true, 
      received: false 
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
  }
  
  Watch(id:any){
    this.route.navigate(['/details'],{queryParams:{id:id}});
    // console.log(this.filter.processCategory("men"));
  }
}
