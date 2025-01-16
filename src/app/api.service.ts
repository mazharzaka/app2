import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
private url='http://localhost:3000/product'
imgUrl='http://localhost:3000/'
  constructor(private http:HttpClient,private Token:LogService ) {  }

  getData(): Observable <any[]> {
    let token=''
    this.Token.getAcess().subscribe((user)=>{
      if(user){
        token=user;
      }
    });
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
  return this.http.get<any[]> (this.url,{headers})
}
delepro(data:any): Observable <any> {
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
   return this.http.post<any> (this.url+'/del',data,{headers})
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
  return this.http.post<any> (this.url+'/edit',data,{headers})
}
details(data:any): Observable <any> {
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
  return this.http.post<any> (this.url+'/one',data,{headers})
}
}
