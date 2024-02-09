import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aukcija } from 'src/app/models/aukcija';
import { Korisnik } from 'src/app/models/korisnik';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-aukcija',
  templateUrl: './aukcija.component.html',
  styleUrls: ['./aukcija.component.css']
})
export class AukcijaComponent implements OnInit{

  constructor(private auctionService:AuctionService, private router:Router){}

  ngOnInit(): void {
    let a = localStorage.getItem('aukcija')
    if(a){
      this.auction=JSON.parse(a);
    }

    let u = localStorage.getItem('ulogovan')
    if(u){
      this.user=JSON.parse(u)
    }
  }

  user:Korisnik=new Korisnik()

  newBid:number[]=[];

  errorMsg:string="";

  bid(i:number){
    this.errorMsg="";
    if(this.newBid[i]){
      let x = '0';
      if(this.auction.umetnine[i].ponuda){
        x=this.auction.umetnine[i].ponuda;
      }
      let oldBid = parseInt(x,10)
      if(this.newBid[i] > oldBid){
        this.auctionService.bid(this.auction.naziv,this.auction.umetnine[i].naziv,this.newBid[i],this.user.korisnicko_ime).subscribe(
          (data:any)=>{
            if(data){
              if(data.message=='isteklo'){
                alert('Aukcija je zavrsena!')
                this.router.navigate(['kupac'])
                return;
              }else{
                alert('Uspesna ponuda!')
                this.router.navigate(['kupac'])
              }
            }
          }
        )
      }else{
        this.errorMsg='Morate uneti ponudu vecu od trenutne!';
        return;
      }
    }else{
      this.errorMsg='Morate uneti ponudu!';
      return;
    }
  }

  auction:Aukcija=new Aukcija()

}
