import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LogService } from '../../services/log.service';
import { Order } from '../../models/Order.model';
import { ToastrService } from 'ngx-toastr';
// import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  standalone: false,

  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private Auth: LogService, private toastr: ToastrService, private Cart: CartService) { }
  arr: any[] = []
  imgurl = 'http://localhost:3000/'
  length: number = 0
  checkOut = false
  ngOnInit(): void {
    const userId = this.Auth.decode().userId

    this.Cart.getcart({ userid: userId }).subscribe({
      next: (data) => {

        if (Array.isArray(data)) {
          this.arr = data.filter((e: any) => e.Isdeleted !== true)
          this.length = this.arr?.reduce((a, b) => a + b.qty, 0)
          this.Cart.updateCartCount(this.length);

          // console.log(data[0]);


          ;
        } else {
          console.error('Expected data to be an array');
        }

        // console.log(data);

      },
      error: (err) => {
        console.log(err);
      }
    }
    )
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
    this.Cart.Check({ userid: userId }).subscribe({
      next: () => {
        this.ngOnInit()
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
