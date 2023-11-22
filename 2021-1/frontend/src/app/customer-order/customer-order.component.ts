import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { User } from '../models/user';
import { Order } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit{

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.items = JSON.parse(localStorage.getItem("orderedItems"));
  }

  items: Item[];
  user: User;
  msg1: string;
  msg2: string;

  confirm(){
    if(this.items.length == 0){
      this.msg2 = "";
      this.msg1="Nema proizvoda u korpi!";
      return;
    }
    let order: Order = new Order()
    order.customer = this.user.username;
    order.items = this.items;
    this.orderService.makeOrder(order).subscribe(
      data=>{
        if(!data){
          this.msg2 = "";
          this.msg1="Neuspesno porucivanje!";
          return;
        }
        this.msg1 = "";
        this.msg2 = "Uspesna porudzbina!"
      }
    );
  }

  remove(name: string){
    let validItems: Item[] = [];
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].name != name){
        validItems.push(this.items[i]);
      }
    }
    this.items = validItems;
    localStorage.setItem("orderedItems", JSON.stringify(this.items));
  }

}
