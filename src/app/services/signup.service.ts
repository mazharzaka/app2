import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url="http://localhost:3000/user";
  constructor(private http:HttpClient) { }
  createUser(data:any):Observable<User>{
    return this.http.post<User>(this.url,data).pipe();
  }
}
