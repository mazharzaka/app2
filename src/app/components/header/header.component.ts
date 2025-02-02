import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Order } from '../../models/Order.model';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  login = false;
  Isuser = true;
  arr: any[] = [];
  length: number = 0;
  private subscriptions: Subscription = new Subscription();

  constructor(private Auth: LogService, private router: Router,private cdr:ChangeDetectorRef , private Cart: CartService) {}

  ngOnInit(): void {
    const userId = this.Auth.decode()?.userId;
    this.Auth.currentUser$.subscribe((user) => {
      this.login = !!user;
      this.Isuser = this.Auth.decode()?.userType === 'user' ? true : false
    });
    const authSub = this.Auth.getAcess().pipe(take(1)).subscribe({
      next: (data) => {
        if (data) {
          this.login = true;
          this.Isuser = this.Auth.decode()?.userType === 'user' ? true : false

        }
        else {
          this.login = false;
        }
        console.log('Login status:', this.login);
        
        this.cdr.detectChanges();
        
      }
    });
    this.subscriptions.add(authSub);

    const cartSub = this.Cart.getcart({ userid: userId }).pipe(take(1)).subscribe({
      next: (data) => {
        if (Array.isArray(data) && data.length > 0 && data[0]?.cartItem) {
          this.arr = data[0].cartItem.filter((e: any) => e.Isdeleted !== true);
          this.length = this.arr.reduce((a, b) => a + (b.qty || 0), 0);
        } else {
          console.warn('Expected data to be a non-empty array with cartItem');
        }
      },
      error: (err) => {
        console.error('Error fetching cart data:', err);
      }
    });
    this.subscriptions.add(cartSub);
    this.cdr.detectChanges();
  }

  logout() {
    this.Auth.logout();
    this.router.navigate(['login']);
    this.login = false;
    // this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
