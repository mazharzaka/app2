import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
url="http://localhost:3000/order";
imgUrl='http://localhost:3000/'

  constructor(private http:HttpClient) { }
  Addtocart(data:any):Observable<any>{
    console.log(data);
    
    return this.http.post<any>(this.url,data)
  }
  getcart(data:any):Observable<any>{
    return this.http.post<any>(this.url+'/cart',data)
  }
  deleorder(data:any): Observable <any> {
 
    console.log(data);
     return this.http.post<any> (this.url+'/del',data)
  }
  getadmin(): Observable <any> {
    return this.http.get<any> (this.url+'/admin')

  }
  staus(data:any):Observable<any>{
   return this.http.post<any>(this.url+'/update',data)
  }
  received(data:any):Observable<any>{
    return this.http.post<any>(this.url+'/received',data)
   }
}
