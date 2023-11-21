import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:8080"

  getItemsWorker(){
    return this.http.get<Order[]>(`${this.backendUrl}/worker/orders`);
  }

  getTopCustomer(){
    return this.http.get<User>(`${this.backendUrl}/worker/customer`);
  }

  makeOrder(o: Order){
    return this.http.post<number>(`${this.backendUrl}/customer/order`, o)
  }
}
