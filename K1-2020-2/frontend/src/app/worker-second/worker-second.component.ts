import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Router } from '@angular/router';
import { ProposalsService } from '../services/proposals.service';
import { Proposal } from '../models/proposal';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-worker-second',
  templateUrl: './worker-second.component.html',
  styleUrls: ['./worker-second.component.css']
})
export class WorkerSecondComponent implements OnInit{

  constructor(private animalService: AnimalsService,private router: Router, private proposalService: ProposalsService){}


  ngOnInit(): void {
    this.proposal = JSON.parse(localStorage.getItem("proposal"))
    this.animal.name=this.proposal.animal;
  }

  proposal:Proposal = new Proposal();
  animal: Animal = new Animal();

  addAnimal(){
    this.animalService.addAnimal(this.animal).subscribe(
      data=>{
        if(data==1){
          alert("Dodata zivotinja")
          this.router.navigate(["worker-start"]);
        }
      }
    )
  }

}
