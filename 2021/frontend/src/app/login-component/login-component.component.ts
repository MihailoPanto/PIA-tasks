import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
  }

  username: string;
  password: string;
  type: string;
  errorMsg1: string;

  user: User = new User();

  login(){
    if(!this.user.username || !this.user.password || !this.user.type){
      this.errorMsg1 = "Niste 1 uneli sve potrebne podatke!";
      return;
    }
    this.userService.login(this.user).subscribe(
      data=>{
        if(!data){
          this.errorMsg1 = "Nepostojeci korisnik!";
          return;
        }
        localStorage.setItem("currentUser",JSON.stringify(data))
        if(data.type == "kupac"){
          this.router.navigate(["customer"]);
        }else{
          this.router.navigate(["worker"]);
        }
      }
    )
  }

}
