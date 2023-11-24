import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Item } from '../models/item';
import { User } from '../models/user';
import { Order } from '../models/order';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit{
  constructor(private itemService:ItemService,private orderService:OrderService,private router:Router){}
  ngOnInit(): void {
    this.getItems()
    this.getOrders()
    let x = localStorage.getItem("user")
    if(x){
      this.user=JSON.parse(x)
    }
  }

  items: Item[] = []
  user:User=new User()
  searchParam:string=""
  orders:Order[]=[]

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

  search(){
    this.items = this.items.filter(item=> item.name.toLowerCase().includes(this.searchParam.toLowerCase()))
  }

  getOrders(){
    this.orderService.getOrders().subscribe(
      data=>{
        if(data){
          this.orders=data
        }
      }
    )
  }

  approve(o:Order){
    this.itemService.update(o).subscribe(
      data=>{
        if(data==1){
          this.orderService.delete(o).subscribe(
            data=>{
              this.getOrders()
              alert("Uspesno")
            }
          )
        }
      }
    )
  }
}
