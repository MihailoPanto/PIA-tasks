import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { Item } from '../models/Item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-customer-start',
  templateUrl: './customer-start.component.html',
  styleUrls: ['./customer-start.component.css']
})
export class CustomerStartComponent implements OnInit{

  constructor(private commentService: CommentService, private router: Router, private itemService: ItemService){}
  ngOnInit(): void {
    this.getItems()
  }

  logout(){
    this.router.navigate([""]);
  }

  items: Item[] = []

  getItems(){
    this.itemService.getItems().subscribe(
      data=>{
        if(!data){
          alert("Nema itema")
        }
        this.items=data;
      }
    )
  }

  details(item: Item){
    localStorage.setItem("item", JSON.stringify(item))
    this.router.navigate(["customer-second"])
  }
}
