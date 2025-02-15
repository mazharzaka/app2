import { Component } from '@angular/core';


import { LogService } from '../../services/log.service';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../../services/orders.service';


@Component({
  selector: 'app-orders-admin',
  standalone: false,

  templateUrl: './orders-admin.component.html',
  styleUrls: ['./orders-admin.component.css']
})
export class OrdersAdminComponent {
  arr: any = []
  filteredItems: any = []
  total = 0
  imgurl = ''
  status = ''
  constructor(private _http:OrdersService , private toastr: ToastrService, private Auth: LogService) { }
  ngOnInit() {
    this._http.getalldata().subscribe({
      next: (data: any) => {
        // console.log(  data
        //   .map((order: any) => order.cartItem.filter((item: any) => !item.Isdeleted && item.CheckOut))
        //   .filter((cart:any) => cart.length > 0) 
        // );
        this.imgurl = this._http.imgUrl
        this.arr = data
        // this.filteredItems = data.map((order: any) => 
        //   order.cartItem.filter((item: any) => !item.Isdeleted && item.CheckOut)
        // )
        // this.total = this.filteredItems.reduce((a: any, b: any) => a + b.qty * b.productId.price, 0)
    console.log(this.arr);
    
        
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  getProductNames(item: any): any {
    const product = item.items.map((e: any) => {
      return { name: e.productId.name, qty: e.qty, status: e.status, id: e.productId._id };
    });
    console.log(product);
    // return product;
  }
  getStatuses(i: number): string[] {
    return this.arr[i].items.map((e:any) => e.status);
  }

  onStatusChange(e: any, itemId: any,id:any) {
    // const itemId=this.Auth.decode().itemId
    console.log('Status changed:', e.target.value, itemId);

    this._http.changeStatus({ status:e.target.value, itemId: itemId,orderId:id }).subscribe({
      next: (response) => {
        // this.ngOnInit(); // Refresh data on success
        console.log('status successful:');
        this.toastr.success('status successful!', 'Success');


      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });

  }


}
