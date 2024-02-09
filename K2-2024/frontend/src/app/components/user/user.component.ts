import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { User } from 'src/app/models/user';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private userService:UserService, private eventService: EventService, private router:Router){}

  ngOnInit(): void {
    let x = localStorage.getItem('user')
    if(x != null){
      this.user=JSON.parse(x);
      this.getEvents()
    }
    this.getFutureEvents();
  }

  futureEvents:Event[]=[];
  userEvents:Event[]=[];

  removeEvent(e:string,d:string){
    this.eventService.deleteEvent(e,d).subscribe(
      (data:any)=>{
        if(data.message == 'ok'){
          this.getEvents();
        }
      }
    )
  }

  getFutureEvents(){
    this.eventService.getFutureEvents().subscribe(
      data=>{
        if(data){
          this.futureEvents=data;
        }
      }
    )
  }

  sortDates(){
    this.userEvents.sort((a,b)=>{
      let dateA = new Date(a.datum);
      let dateB = new Date(b.datum);
      return dateA.getTime() - dateB.getTime();
    });
  }

  getEvents(){
    this.eventService.getEvents(this.user.kor_ime).subscribe(
      data=>{
        if(data){
          this.userEvents=data;
          let today = new Date()
          for(let i=0;i<this.userEvents.length;i++){
            let date = new Date(this.userEvents[i].datum);
            if(date>today){
              this.userEvents[i].show=true;
            }
          }
          this.sortDates()
        }
      }
    )
  }

  user:User=new User();

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  firstname:string="";
  lastname:string="";
  email:string="";

  error1:string="";

  seeDetails(e:Event){
    localStorage.setItem('event',JSON.stringify(e))
    this.router.navigate(['event'])
  }

  changeInfo(){
    if(this.firstname=="" && this.lastname=="" && this.email==""){
      this.error1="Niste uneli nijedan podatak za zamenu!";
      return;
    }

    this.userService.userUpdate(this.user.kor_ime,this.firstname,this.lastname,this.email).subscribe(
      (data:any)=>{
        if(data.message == 'error'){
          this.error1="Neuspesna izmena informacija, pokusajte ponovo!";
          return;
        }else{
          this.user = data;
          localStorage.setItem('user', JSON.stringify(this.user))
          this.firstname="";
          this.lastname="";
          this.email="";
        }
      }
    )
  }

  newName:string="";
  newDate:string="";
  newPlace:string="";
  err2:string="";
  text:string="";
  makeEvent(){
    this.err2="";
    this.text="";
    if(this.newName=="" || this.newDate =="" || this.newPlace==""){
      this.err2="Sva polja su obavezna!";
      return;
    }
    let e = {
      naziv:this.newName,
      mesto:this.newPlace,
      organizator:this.user.kor_ime,
      datum:this.newDate,
      dolazi:[]
    }

    this.eventService.addEvent(e).subscribe(
      (data:any)=>{
        if(data){
          if(data.message=='error-name'){
            this.err2="Ime proslave je zauzeto, izaberite drugo!";
            return;
          }else if(data.message=='error-place-date'){
            this.err2="Izabrani termin u ovom mestu je zauzet!";
            return;
          }else if(data.message=='ok'){
            this.getEvents();
            this.getFutureEvents();
            this.text="Uspesno dodavanje dogadjaja!"
          }else{
            this.err2="Greska, pokusajte ponovo!";
            return;
          }
        }
      }
    )
  }
  
}
