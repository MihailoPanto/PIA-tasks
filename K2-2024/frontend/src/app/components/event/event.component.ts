import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    let u = localStorage.getItem('user');
    if(u != null){
      this.user = JSON.parse(u);
    }
    let e = localStorage.getItem('event');
    if(e != null){
      this.event = JSON.parse(e);
    }
  }

  user:User=new User();
  event:Event=new Event();

}
