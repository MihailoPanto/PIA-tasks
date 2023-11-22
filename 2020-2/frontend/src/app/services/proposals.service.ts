import { Injectable } from '@angular/core';
import { Proposal } from '../models/proposal';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProposalsService {

  constructor(private http: HttpClient) { }

  backendUrl = "http://localhost:8080"

  addProposal(p:Proposal){
    return this.http.post<number>(`${this.backendUrl}/proposal/add`, p);
  }

  getProposals(){
    return this.http.get<Proposal[]>(`${this.backendUrl}/proposal/all`);
  }

  getVotes(u: User){
    return this.http.post<number[]>(`${this.backendUrl}/proposal/votes`, u);
  }

  vote(idp: number, visitor: string){
    let data = {
      "idP":idp,
      "visitor": visitor
    }
    return this.http.post<number>(`${this.backendUrl}/proposal/vote`, data);
  }

}
