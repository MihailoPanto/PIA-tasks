import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../models/item';
import { User } from '../models/user';

@Component({
  selector: 'app-customer-start',
  templateUrl: './customer-start.component.html',
  styleUrls: ['./customer-start.component.css']
})
export class CustomerStartComponent implements OnInit{
  
  constructor(private router: Router, private itemService: ItemService){}

  ngOnInit(): void {
    this.getItems()
    this.user = JSON.parse(localStorage.getItem("currentUser"));
  }

  user: User;
  errorMsg2: string;
  items: Item[];

  getItems(){
    this.itemService.getItems().subscribe(
      data=>{
        if(!data){
          this.errorMsg2="Nema najboljeg kupca!"
          return;
        }
        this.items=data;
      }
    );
  }

  order(){
    let orderedItems: Item[] = [];
    for(let i=0; i<this.items.length; i++){
      if(this.items[i].toOrder){
        orderedItems.push(this.items[i]);
      }
    }
    localStorage.setItem("currentUser", JSON.stringify(this.user));
    localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
    this.router.navigate(["customer-order"]);
  }

  logout(){
    this.router.navigate([""]);
  }

}
