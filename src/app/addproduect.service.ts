import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddproduectService {
  url="http://localhost:3000/product";
  constructor(private http:HttpClient) { }
  createProduct(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }
}
