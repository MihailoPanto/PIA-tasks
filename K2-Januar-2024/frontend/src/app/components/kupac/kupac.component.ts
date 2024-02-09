import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aukcija } from 'src/app/models/aukcija';
import { Korisnik } from 'src/app/models/korisnik';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{

  constructor(private router:Router, private auctionService:AuctionService){}

  ngOnInit(): void {
    let u = localStorage.getItem('ulogovan');
    if(u){
      this.user = JSON.parse(u);
    }

    this.getOpen()
    this.getMine()
  }

  getOpen(){
    this.auctionService.open().subscribe(
      data=>{
        if(data){
          this.openAuctions=data;
          this.sortAuctions()
        }
      }
    )
  }

  sortAuctions(){
    this.openAuctions.sort((a,b)=>{
      let dateA=new Date(a.kraj);
      let dateB=new Date(b.kraj);
      return dateA.getTime() - dateB.getTime();
    })
  }

  user:Korisnik=new Korisnik()
  openAuctions:Aukcija[]=[]

  mineAuctions:Aukcija[]=[]

  umetnine: {naziv:string,ponuda:string, vlasnik:string}[]=[]

  getMine(){
    this.auctionService.mine(this.user.korisnicko_ime).subscribe(
      data=>{
        if(data){
          this.mineAuctions=data;
          for(let i =0;i<this.mineAuctions.length;i++){
            for(let j=0;j<this.mineAuctions[i].umetnine.length;j++){
              if(this.mineAuctions[i].umetnine[j].vlasnik == this.user.korisnicko_ime){
                this.umetnine.push(this.mineAuctions[i].umetnine[j])
              }
            }
          }
        }
      }
    )
  }

  auction(a:Aukcija){
    localStorage.setItem('aukcija',JSON.stringify(a));
    this.router.navigate(['aukcija'])
  }

  logout(){
    localStorage.removeItem('ulogovan');
    this.router.navigate(['']);
  }

}
