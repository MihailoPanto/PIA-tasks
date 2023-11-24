import { Component, OnInit } from '@angular/core';
import { Proposal } from '../models/proposal';
import { AnimalsService } from '../services/animals.service';
import { Router } from '@angular/router';
import { ProposalsService } from '../services/proposals.service';

@Component({
  selector: 'app-worker-start',
  templateUrl: './worker-start.component.html',
  styleUrls: ['./worker-start.component.css']
})
export class WorkerStartComponent implements OnInit{

  constructor(private animalService: AnimalsService,private router: Router, private proposalService: ProposalsService){}


  ngOnInit(): void {
    this.getProposals();
  }

  proposals: Proposal[] = [];

  getProposals(){
    this.proposalService.getProposals().subscribe(
      data=>{
        this.proposals = data;
      }
    )
  }

  approve(p:Proposal){
    this.proposalService.approve(p).subscribe(
      data=>{
        if(data==1){
          localStorage.setItem("proposal",JSON.stringify(p));
          this.router.navigate(["worker-second"]);
        }
      }
    )

  }

  decline(p:Proposal){
    this.proposalService.decline(p).subscribe(
      data=>{
        if(data==1){
          this.getProposals();
          alert("Odbijeno")
        }
      }
    )
  }

  logout(){
    this.router.navigate([""]);
  }

}
