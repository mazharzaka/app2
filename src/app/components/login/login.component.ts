import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  arr: any[] = []
  length: number = 0
  constructor(private Auth: LogService, private Cart: CartService, private toastr: ToastrService, private router: Router) { }
  onSubmit(data: NgForm) {
    if (data.valid) {
      this.Auth.login(data.value).subscribe({
        next: (res) => {
          if (this.Auth.decode().userType === 'admin') { this.router.navigate(['/admin']) }
          else {
            this.Cart.getcart({ userid: this.Auth.decode().userId }).subscribe({
              next: (data) => {
                if (Array.isArray(data) && data.length > 0) {
                  const cart = data[0];
                  this.arr = cart.cartItem?.filter((e: any) => e.Isdeleted !== true);
                  this.length = this.arr.reduce((a, b) => a + (b.qty || 0), 0);
                  console.log('Cart:', this.arr);

                  // تحديث العدد في السلة
                  this.Cart.updateCartCount(this.length);
                }
              },
              error: (err) => console.error('Error fetching cart data:', err)
            });
            // this.Cart.getMyorders({ userid: this.Auth.decode().userId }).subscribe({
            //   next: (data) => {
            //     if (Array.isArray(data) && data.length > 0) {
            //       const cart = data[0];
            //       this.arr = cart.cartItem?.filter((e: any) => e.Isdeleted !== true);
            //       this.length = this.arr.reduce((a, b) => a + (b.qty || 0), 0);
            //       console.log('myorders:', this.arr);

            //       // تحديث العدد في السلة
            //       this.Cart.updateOrderCount(this.length);
            //     }
            //   },
            //   error: (err) => console.error('Error fetching cart data:', err)
            // });

            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.log(err);
          this.toastr.error('username or password is wrong.', 'Error');

        }
      })
      // console.log('data Submitted:', data.value); 
    }
    else {
      this.toastr.error('Form is invalid.', 'Error');


    }
  }

}
