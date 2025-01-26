import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from './log.service';
import { Product } from '../models/Proudect.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
private url='http://localhost:3000/product'
imgUrl='http://localhost:3000/'
  constructor(private http:HttpClient,private Token:LogService ) {  }

  getData(): Observable <Product[]> {
    let token=''
    this.Token.getAcess().subscribe((user)=>{
      if(user){
        token=user;
      }
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  return this.http.get<Product[]> (this.url,{headers})
}
delepro(data:any): Observable <Product> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
  console.log(data);
   return this.http.post<Product> (this.url+'/del',data,{headers})
}
stock(data:any): Observable <Product> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
  console.log(data);
   return this.http.post<any> (this.url+'/stock',data,{headers})
}
editpro(data:any): Observable <any> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
  console.log(data);
  return this.http.post<Product> (this.url+'/edit',data,{headers})
}
details(data:any): Observable <Product> {
  let token=''
  this.Token.getAcess().subscribe((user)=>{
    if(user){
      token=user;
    }
  });
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })
  console.log(data);
  return this.http.post<Product> (this.url+'/one',data,{headers})
}
}
