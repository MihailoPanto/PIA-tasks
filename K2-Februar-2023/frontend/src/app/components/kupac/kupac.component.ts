import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{

  constructor(private korisnikServis:KorisnikService, private router:Router){}

  ngOnInit(): void {
    let k=localStorage.getItem('ulogovan')
    if(k){
      this.korisnik=JSON.parse(k)
    }
    this.korisnikServis.getItems().subscribe(
      data=>{
        if(data){
          this.proizvodi=data
          this.sortCat()
        }
      }
    )
    let c=localStorage.getItem('cena')
    if(c){
      alert('Racun je: '+JSON.parse(c))
      localStorage.removeItem('cena')
      this.getItems()
    }
  }

  error1:string=""

  order(){
    this.error1=''
    let izabrani=[]
    for(let i=0;i<this.proizvodi.length;i++){
      if(this.proizvodi[i].izabran == true){
        izabrani.push(this.proizvodi[i])
      }
    }
    if(izabrani.length == 0){
      this.error1="Morate dodati barem jedan proizvod!"
      return
    }

    localStorage.setItem('izabrani',JSON.stringify(izabrani))
    this.router.navigate(['proizvodi'])
  }

  sortCat(){
    this.proizvodi.sort((a,b)=>{
      return parseInt(a.kategorija) - parseInt(b.kategorija);
    })
  }

  getItems(){
    this.korisnikServis.getItems().subscribe(
      data=>{
        if(data){
          this.proizvodi=data
          this.sortCat()
        }
      }
    )
  }

  korisnik:Korisnik=new Korisnik();
  proizvodi:Proizvod[]=[];

  logout(){
    localStorage.clear()
    this.router.navigate(['']);
  }

}
