import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
url="http://localhost:3000/order";
imgUrl='http://localhost:3000/'

  constructor(private http:HttpClient,private Auth:LogService) { }
  Addtocart(data:any):Observable<any>{
    console.log(data);
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<any>(this.url,data,{headers})
  }
  getcart(data:any):Observable<any>{
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<any>(this.url+'/cart',data,{headers})
  }
  deleorder(data:any): Observable <any> {
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
     return this.http.post<any> (this.url+'/del',{headers})
  }
  getadmin(): Observable <any> {
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    
    return this.http.get<any> (this.url+'/admin' ,{headers})

  }
  staus(data:any):Observable<any>{
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
   return this.http.post<any>(this.url+'/update',data ,{headers})
  }
  received(data:any):Observable<any>{
    let token=''
    this.Auth.getAcess().subscribe(data=>{

      if(data){token=data}
    })
    const headers=new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<any>(this.url+'/received',data,{headers})
   }
}
