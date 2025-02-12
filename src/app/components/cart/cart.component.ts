import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LogService } from '../../services/log.service';
import { Order } from '../../models/Order.model';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from '../../services/orders.service';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private Auth: LogService, private toastr: ToastrService, private Cart: CartService, private Order: OrdersService) { }
  arr: any[] = []
  imgurl = 'http://localhost:3000/'
  length: number = 0
  checkOut = false;
  total:number=0;
  loadCart() {const userId = this.Auth.decode().userId

    this.Cart.getcart({ userid: userId }).subscribe({
      next: (data) => {

        if (Array.isArray(data)) {
          this.arr = data[0]?.cartItem
          this.length = this.arr?.reduce((a, b) => a + b.qty, 0)
          this.Cart.updateCartCount(this.length);
   this.total=data[0]?.totalPriceCart
console.log(data);

        } else {
          console.error('Expected data to be an array');
        }

        // console.log(data);

      },
      error: (err) => {
        console.log(err);
      }
    }
    )}

  ngOnInit(): void {
    this.loadCart();
  }
  dele(data: any) {
    console.log(data);
    const userId = this.Auth.decode().userId

    this.Cart.deleorder({ productId: data, userid: userId }).subscribe({
      next: (response) => {
        this.ngOnInit(); // Refresh data on success
        console.log('Deletion successful:', response);
        this.toastr.success('Deletion successful!', 'Success');

      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });

  }
  editqty(value: string, data: any) {
    const userId = this.Auth.decode().userId

    this.Cart.qty({ productId: data, userid: userId, qty: value }).subscribe({
      next: (response) => {
        this.ngOnInit(); // Refresh data on success
        console.log('Deletion successful:', response);
      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });
  }
  check() {
    const userId = this.Auth.decode().userId

    console.log(userId);
    this.Order.Check({ userid: userId }).subscribe({
      next: () => {
        this.loadCart();
        this.toastr.success('checkout successful!', 'Success');
        // this.checkOut=true
      },
      error: () => {
        console.log("err");
        this.checkOut = false

      }
    })
  }
}
