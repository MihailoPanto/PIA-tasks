import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private servis: UserService, private ruter: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string = "";
  lozinka: string = "";
  tip: string = "";
  poruka: string = "";

  prijavaNaSistem() {
    this.servis.prijavaNaSistem(this.kor_ime, this.lozinka).subscribe((korisnik: User) => {
      if (!korisnik) {
        this.poruka = 'Losi podaci';
      }
      else {
        this.poruka = '';
        localStorage.setItem('user', JSON.stringify(korisnik));
        this.ruter.navigate(['user']);
      }
    })
  }

}
