import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { User } from '../models/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{

  constructor(private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    this.getItems();
    this.getTopCustomer()
  }

  errorMsg1: string;
  orders: Order[];
  customer: User;
  errorMsg2: string;

  getItems(){
    this.orderService.getItemsWorker().subscribe(
      data=>{
        if(!data){
          this.errorMsg1="Nema evidentiranih narudzbina!"
          return;
        }
        this.orders = data;
      }
    );
  }

  getTopCustomer(){
    this.orderService.getTopCustomer().subscribe(
      data=>{
        if(!data){
          this.errorMsg2="Nema najboljeg kupca!"
          return;
        }
        this.customer = data;
      }
    )
  }

  logout(){
    this.router.navigate([""]);
  }

}
