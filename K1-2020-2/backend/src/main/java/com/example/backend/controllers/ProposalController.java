package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ProposalRepo;
import com.example.backend.models.Proposal;
import com.example.backend.models.User;

@RestController
@RequestMapping("/proposal")
@CrossOrigin(origins = "http://localhost:4200/")
public class ProposalController {
    
    @PostMapping("/add")
    public int addProposal(@RequestBody Proposal p){
        return new ProposalRepo().addProposal(p);
    }

    @GetMapping("/all")
    public List<Proposal> getProposals(){
        return new ProposalRepo().getProposals();
    }

    @PostMapping("/votes")
    public List<Integer> getVotes(@RequestBody User user){
        return new ProposalRepo().getVotes(user);
    }

    @PostMapping("vote")
    public int vote(@RequestBody Proposal p){
        return new ProposalRepo().vote(p);
    }

    @PostMapping("approve")
    public int approve(@RequestBody Proposal p){
        return new ProposalRepo().approve(p);
    }

    @PostMapping("decline")
    public int decline(@RequestBody Proposal p){
        return new ProposalRepo().decline(p);
    }

}
