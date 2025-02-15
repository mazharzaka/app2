import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LogService } from './log.service';
import { Order } from '../models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private url = "http://localhost:3000/cart";
imgUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient, private Auth: LogService) {}
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable(); 
  // private orderCount = new BehaviorSubject<number>(0);
  // orderCount$ = this.orderCount.asObservable(); 
  private getHeaders(): Observable<any> {
    return this.Auth.getAcess().pipe(
      switchMap(token => {
        return new Observable(observer => {
          observer.next(new HttpHeaders({
            Authorization: `Bearer ${token}`
          }));
          observer.complete();
        });
      })
    );
  }
  updateCartCount(count: number) {
    console.log('cart Count:', count); 
    count = count || 0;

    this.cartCount.next(count); 
  }
 
  Addtocart(data: any): Observable<Order> {
    return this.getHeaders().pipe(
      switchMap(headers => this.http.post<Order>(this.url, data, { headers }))
    );
  }

  getcart(data: any): Observable<Order> {
    return this.getHeaders().pipe(
      switchMap(headers => this.http.post<Order>(`${this.url}/cart`, data, { headers })),
      
    );
  }
  // getMyorders(data: any): Observable<Order> {
  //   return this.getHeaders().pipe(
  //     switchMap(headers => this.http.post<Order>(`${this.url}/Myorders`, data, { headers }))
  //   );
  // }


  deleorder(data: any): Observable<Order> {
    return this.getHeaders().pipe(
      switchMap(headers => this.http.post<Order>(`${this.url}/del`, data, { headers }))
    );
  }

  // getadmin(): Observable<Order> {
  //   return this.getHeaders().pipe(
  //     switchMap(headers => this.http.get<Order>(`${this.url}/admin`, { headers }))
  //   );
  // }

  // staus(data: any): Observable<Order> {
  //   return this.getHeaders().pipe(
  //     switchMap(headers => this.http.post<Order>(`${this.url}/update`, data, { headers }))
  //   );
  // }

  // Check(data: any): Observable<Order> {
  //   return this.getHeaders().pipe(
  //     switchMap(headers => this.http.post<Order>(`${this.url}/check`, data, { headers }))
  //   );
  // }

  qty(data: any): Observable<Order> {
    return this.getHeaders().pipe(
      switchMap(headers => this.http.post<Order>(`${this.url}/qty`, data, { headers }))
    );
  }


}
