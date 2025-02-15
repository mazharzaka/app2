import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { COrder } from '../models/Check.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = "http://localhost:3000/order";
imgUrl = 'http://localhost:3000/'
  constructor(private http:HttpClient,private Token:LogService) { }
    private orderCount = new BehaviorSubject<number>(0);
    orderCount$ = this.orderCount.asObservable(); 
   Check(data: any): Observable <COrder[]> {
      let token=''
      this.Token.getAcess().subscribe((user)=>{
        if(user){
          token=user;
        }
      });
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    return this.http.post<COrder[]> (this.url+'/check',data,{headers})
  }
  getdata(data: any): Observable <COrder[]> {
    let token=''
    this.Token.getAcess().subscribe((user)=>{
      if(user){
        token=user;
      }
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  return this.http.post<COrder[]> (this.url+'/Myorders',data,{headers})
}
changeStatus(data: any): Observable <COrder[]> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
return this.http.post<COrder[]> (this.url+'/status',data,{headers})
}
getalldata(): Observable <COrder[]> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
return this.http.get<COrder[]> (this.url+'/Allorders',{headers})
}
 updateOrderCount(count: number) {  
    console.log('Order Count:', count);
    count = count || 0;
    this.orderCount.next(count); 
  }
}
