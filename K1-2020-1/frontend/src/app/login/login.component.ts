import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService,private router:Router){}

  user: User=new User()
  errorMsg:string=""

  login(){
    alert(this.user.type)
    this.userService.login(this.user).subscribe(
      data=>{
        if(!data){
          this.errorMsg="Nepostojeci korisnik!"
          return
        }
        localStorage.setItem("user",JSON.stringify(data))
        this.user=data
        if(data.type=="kupac"){
          this.router.navigate(["customer"])
        }else{
          this.router.navigate(["worker"])
        }
      }
    )
  }

}
