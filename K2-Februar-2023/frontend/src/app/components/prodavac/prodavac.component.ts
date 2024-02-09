import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Narudzbina } from 'src/app/models/order';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit {
  constructor(private korisnikServis:KorisnikService, private router:Router){}

  ngOnInit(): void {
    let k=localStorage.getItem('ulogovan')
    if(k){
      this.korisnik=JSON.parse(k)
    }

    this.getItems()

    this.korisnikServis.getOrders().subscribe(
      data=>{
        if(data){
          this.orders=data
          for(let i=0;i<this.orders.length;i++){
            let tezina=0;
            for(let j=0;j<this.orders[i].proizvodi.length;j++){
              tezina += parseFloat(this.orders[i].proizvodi[j].kolicina)
            }
            if(tezina>20) this.orders[i].velicina='red'
            if(tezina<2) this.orders[i].velicina='green'
          }
        }
      }
    )
  }

  kolicine:number[]=[]

  korisnik:Korisnik=new Korisnik()

  orders:Narudzbina[]=[]

  getItems(){
    this.korisnikServis.getItems().subscribe(
      data=>{
        if(data){
          this.proizvodi=data
        }
      }
    )
  }

  proizvodi:Proizvod[]=[]

  add(i:number){
    if(this.kolicine[i]){
      this.korisnikServis.update(this.proizvodi[i].naziv,this.proizvodi[i].stanje+this.kolicine[i]).subscribe(
        data=>{
          this.ngOnInit()
        }
      )
    }
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['']);
  }
}
