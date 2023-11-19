import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit{

  constructor(private userService: UserService){}

  ngOnInit(): void {
  }

  username: string;
  password: string;
  type: string;
  errorMsg1: string;

  user: User = new User();

  login(){
    console.log(this.username)
    console.log(this.password)
    console.log(this.type)
    if(!this.username || !this.password || !this.type){
      this.errorMsg1 = "Niste uneli sve potrebne podatke!";
      return;
    }
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.type = this.type;
    this.userService.login(this.user).subscribe(
      data=>{
        if(!data){
          this.errorMsg1 = "Nepostojeci korisnik!";
          return;
        }
      }
    )
  }

}
