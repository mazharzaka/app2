import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:3000/category";
  constructor(private http:HttpClient,private Auth:LogService) { }
  getCategories():Observable<Category[]>{
     let token=''
        this.Auth.getAcess().subscribe(data=>{
    
          if(data){token=data}
        })
        const headers=new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
    return this.http.get<Category[]>(this.url,{headers});
  }
}
