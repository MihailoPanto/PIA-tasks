import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  user: User = new User()
  errorMsg:string=""

  login(){
    if(!this.user.username || !this.user.password || !this.user.type){
      this.errorMsg="Sva polja su obavezna!";
      return;
    }
    this.userService.login(this.user).subscribe(
      data=>{
        if(!data){
          this.errorMsg = "Izabrali ste nepostojeceg korisnika!"
          return;
        }
        this.user=data;
        localStorage.setItem("user", JSON.stringify(data))
        if(this.user.type == "kupac"){
          this.router.navigate(["customer-start"])
        }else{
          this.router.navigate(["worker"]);
        }
      }
    )
  }
}
