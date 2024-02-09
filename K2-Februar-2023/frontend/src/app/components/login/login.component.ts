import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servis: KorisnikService, private ruter: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string = "";
  lozinka: string = "";
  tip: string = "";
  poruka: string = "";

  prijavaNaSistem() {
    this.servis.prijavaNaSistem(this.kor_ime, this.lozinka).subscribe((korisnik: Korisnik) => {
      if (!korisnik) {
        this.poruka = 'Losi podaci';
      }
      else {
        if (korisnik.tip == this.tip) {

          this.poruka = '';
          localStorage.setItem('ulogovan', JSON.stringify(korisnik));
          if (korisnik.tip == "kupac") {
            this.ruter.navigate(['kupac']);
          }
          else {
            this.ruter.navigate(['prodavac']);
          }
        }
        else {
          this.poruka = 'Pogresan tip korisnika';
        }
      }
    })
  }

}
