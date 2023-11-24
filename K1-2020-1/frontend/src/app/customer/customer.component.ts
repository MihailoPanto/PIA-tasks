import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Order } from '../models/order';
import { User } from '../models/user';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{

  constructor(private itemService:ItemService,private orderService:OrderService,private router:Router){}
  ngOnInit(): void {
    this.getItems()
    let x = localStorage.getItem("user")
    if(x){
      this.user=JSON.parse(x)
    }
  }

  items: Item[] = []
  user:User=new User()

  getItems(){
    this.itemService.getItems().subscribe(
      data=>{
        if(data){
          this.items=data;
        }
      }
    )
  }

  logout(){
    this.router.navigate([""])
  }

  order(){
    for(let i=0;i<this.items.length;i++){
      if(this.items[i].checked){
        let order: Order=new Order()
        order.customer=this.user.username
        order.item=this.items[i].idP
        alert(this.items[i].wantedQuantity)
        if(!this.items[i].wantedQuantity){
          order.quantity=1
        }else{
          order.quantity=this.items[i].wantedQuantity
        }
        alert(order.quantity)

        this.orderService.addOrder(order).subscribe(
          data=>{
            if(data){
              alert("Uspesno")
            }
          }
        )
      }
    }
  }

}
