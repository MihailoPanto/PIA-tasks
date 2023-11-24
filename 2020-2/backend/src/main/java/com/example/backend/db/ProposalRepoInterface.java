package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Proposal;
import com.example.backend.models.User;

public interface ProposalRepoInterface {

    public int addProposal(Proposal p);

    public List<Proposal> getProposals();

    public List<Integer> getVotes(User u);

    public int vote(Proposal p);

    public int approve(Proposal p);

    public int decline(Proposal p);

}
