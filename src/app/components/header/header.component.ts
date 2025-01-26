import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/Order.model';
// import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  login = false;
  Isuser = true;
  arr: any[] = []

  length: number = 0
  constructor(private Auth: LogService, private router: Router, private Cart: CartService, private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    const userId = this.Auth.decode().userId

    this.Auth.getAcess().subscribe({
      next: (data) => {
        if (data) {
          this.login = true;
          this.Isuser = this.Auth.decode().userType === 'user' ? true : false

        }
        else {
          this.login = false;
        }
      }
    })
    this.Cart.getcart({ userid: userId }).subscribe( {
      // console.log(data);
      next: (data) => {
        if (Array.isArray(data)) {
          this.arr = data.filter((e: Order) => e.Isdeleted !== true);
        } else {
          console.error('Expected data to be an array');
        }

        this.length = this.arr.reduce((a, b) => a + b.qty, 0)
        this.ngOnInit(); // Refresh data on success

      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },

    })
  }
  logout() {
    this.Auth.logout();
    this.router.navigate(['login']);
    this.login = false;
  }



}
