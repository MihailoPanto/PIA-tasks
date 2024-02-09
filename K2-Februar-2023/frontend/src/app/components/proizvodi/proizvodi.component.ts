import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Narudzbina } from 'src/app/models/order';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent  implements OnInit{

  constructor(private korisnikServis:KorisnikService, private router:Router){}

  ngOnInit(): void {
    let k=localStorage.getItem('ulogovan')
    if(k){
      this.korisnik=JSON.parse(k)
    }
    let p = localStorage.getItem('izabrani')
    if(p){
      this.proizvodi=JSON.parse(p)
    }
  }

  order(){
    this.error1=''
    let cena=0;
    let order = new Narudzbina()
    for(let i=0;i<this.proizvodi.length;i++){
      if(this.proizvodi[i].stanje < this.proizvodi[i].kolicina){
        this.error1="Izabrali ste preveliku kolicinu proizvoda "+this.proizvodi[i].naziv;
        return;
      }
      order.proizvodi.push({naziv: this.proizvodi[i].naziv, kolicina: this.proizvodi[i].kolicina.toString()})
      cena += parseInt(this.proizvodi[i].cena)*this.proizvodi[i].kolicina;
    }

    order.kupac=this.korisnik.kor_ime;
    order.racun=cena

    this.korisnikServis.addOrder(order).subscribe(
      data=>{
        for(let i=0;i<this.proizvodi.length;i++){
          this.korisnikServis.update(this.proizvodi[i].naziv,this.proizvodi[i].stanje-this.proizvodi[i].kolicina).subscribe(
            data=>{

            }
          )
        }
      }
    )
    localStorage.setItem('cena',JSON.stringify(cena));
    this.router.navigate(['kupac'])
  }

  error1:string=""

  korisnik:Korisnik=new Korisnik();
  proizvodi:Proizvod[]=[];

  logout(){
    localStorage.clear()
    this.router.navigate(['']);
  }
}
