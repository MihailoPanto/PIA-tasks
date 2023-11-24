import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  backendUrl = "http://localhost:8080"

  addOrder(o:Order){
    return this.http.post<number>(`${this.backendUrl}/order/add`,o);
  }

  getOrders(){
    return this.http.get<Order[]>(`${this.backendUrl}/order/all`);
  }

  delete(o:Order){
    return this.http.post<number>(`${this.backendUrl}/order/delete`,o);
  }
}
