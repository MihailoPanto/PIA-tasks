import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private userService: UserService, private router: Router){

  }


  user: User = new User();
  errorMsg1: string;  

  login(){
    if(!this.user.username || !this.user.password || !this.user.type){
      this.errorMsg1 = "Niste uneli sve podatke!";
      return;
    }
    this.userService.login(this.user).subscribe(
      data=>{
        if(!data){
          this.errorMsg1 = "Uneli ste nevalidne podatke!";
          return;
        }
        localStorage.setItem("loggedUser", JSON.stringify(data));
        if(data.type=="radnik"){
          this.router.navigate(["worker-start"]);
        }else{
          this.router.navigate(["visitor"]);
        }
      }
    );
  }

}
