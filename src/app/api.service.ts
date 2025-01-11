import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {
private url='http://localhost:3000/product'
imgUrl='http://localhost:3000/'
  constructor(private http:HttpClient ) {  }
  getData(): Observable <any[]> {
  return this.http.get<any[]> (this.url)
}
delepro(data:any): Observable <any> {
 
  console.log(data);
   return this.http.post<any> (this.url+'/del',data)
}
editpro(data:any): Observable <any> {
  console.log(data);
  return this.http.post<any> (this.url+'/edit',data)
}}
