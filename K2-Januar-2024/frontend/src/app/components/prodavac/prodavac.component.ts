import { Component, OnInit } from '@angular/core';
import { Aukcija } from 'src/app/models/aukcija';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{

  constructor(private auctionService:AuctionService){}

  ngOnInit(): void {
    this.getAll()
  }

  allAuctions:Aukcija[]=[]

  getAll(){
    this.auctionService.all().subscribe(
      data=>{
        if(data){
          this.allAuctions=data;
          let now=new Date();
          for(let i=0;i<this.allAuctions.length;i++){
            let aEndDate=new Date(this.allAuctions[i].kraj);
            if(now>aEndDate) this.allAuctions[i].istekla=true
          }
        }
      }
    )
  }

}
