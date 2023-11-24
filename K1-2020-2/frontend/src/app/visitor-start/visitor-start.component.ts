import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Animal } from '../models/animal';
import { Router } from '@angular/router';
import { Proposal } from '../models/proposal';
import { ProposalsService } from '../services/proposals.service';
import { User } from '../models/user';

@Component({
  selector: 'app-visitor-start',
  templateUrl: './visitor-start.component.html',
  styleUrls: ['./visitor-start.component.css']
})
export class VisitorStartComponent implements OnInit{

  constructor(private animalService: AnimalsService,private router: Router, private proposalService: ProposalsService){}

  ngOnInit(): void {
    this.getAnimals();
    this.user = JSON.parse(localStorage.getItem("loggedUser"));
    this.getProposals();
    this.getVotes()

  }

  animals: Animal[] = [];

  getAnimals(){
    this.animalService.getAnimals().subscribe(
      data=>{
        this.animals = data;
      }
    );
  }

  sortAnimals(){
    this.animals = this.animalService.sortByWeight(this.animals);
  }

  logout(){
    localStorage.setItem("loggedUser", null);
    this.router.navigate([""]);
  }

  proposal: Proposal = new Proposal();
  user: User = new User();

  addProposal(){
    this.proposal.visitor = this.user.username;
    this.proposalService.addProposal(this.proposal).subscribe(
      data=>{
        if(data==1){
          alert("Uspesno dodavanje!");
        }
      }
    )
  }

  proposals: Proposal[] = [];
  votes: number[] = [];

  getProposals(){
    this.proposalService.getProposals().subscribe(
      data=>{
        this.proposals = data;
      }
    )
  }

  getVotes(){
    this.proposalService.getVotes(this.user).subscribe(
      data=>{
        this.votes = data;
      }
    )
  }

  vote(idp: number){
    this.proposalService.vote(idp, this.user.username).subscribe(
      data=>{
        this.ngOnInit()
      }
    )
  }

}
