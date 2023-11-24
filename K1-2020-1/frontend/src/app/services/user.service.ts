import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  backendUrl = "http://localhost:8080"

  login(u: User){
    return this.http.post<User>(`${this.backendUrl}/user/login`,u);
  }
}
