import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/Order.model';
import { LogService } from '../../services/log.service';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';

@Component({
  selector: 'app-orders-admin',
  standalone: false,

  templateUrl: './orders-admin.component.html',
  styleUrl: './orders-admin.component.css'
})
export class OrdersAdminComponent {
  arr: any = []
  filteredItems: any = []
  total = 0
  imgurl = ''
  status = ''
  constructor(private _http: CartService, private toastr: ToastrService, private Auth: LogService) { }
  ngOnInit() {
    this._http.getadmin().subscribe({
      next: (data: any) => {
        console.log(data);
        this.imgurl = this._http.imgUrl
        this.arr = data
        this.filteredItems = data.map((order: any) => 
          order.cartItem.filter((item: any) => !item.Isdeleted && item.CheckOut)
        )
        this.total = this.filteredItems.reduce((a: any, b: any) => a + b.qty * b.productId.price, 0)
        console.log(this.filteredItems);
        
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getProductNames(item: any[]): any {
    const product = item.map((e: any) => {
      return { name: e.productId.name, qty: e.qty, status: e.status, id: e.productId._id };
    });
    console.log(product);
    return product;
  }


  onStatusChange(e: any, userId: any,id:any) {
    // const userId=this.Auth.decode().userId
    console.log('Status changed:', e.target.value);

    this._http.staus({ status:e.target.value, userid: userId,id:id }).subscribe({
      next: (response) => {
        // this.ngOnInit(); // Refresh data on success
        console.log('Deletion successful:');
        this.toastr.success('Deletion successful!', 'Success');


      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });

  }

}
