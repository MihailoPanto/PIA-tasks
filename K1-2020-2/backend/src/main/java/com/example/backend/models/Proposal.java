package com.example.backend.models;

public class Proposal {
    private int idP;
    private String visitor;
    private String animal;
    private String comment;
    private int votes;
    private boolean approved;
    public Proposal(int idP, String visitor, String animal, String comment, int votes, boolean approved) {
        this.idP = idP;
        this.visitor = visitor;
        this.animal = animal;
        this.comment = comment;
        this.votes = votes;
        this.approved = approved;
    }
    public int getIdP() {
        return idP;
    }
    public void setIdP(int idP) {
        this.idP = idP;
    }
    public String getVisitor() {
        return visitor;
    }
    public void setVisitor(String visitor) {
        this.visitor = visitor;
    }
    public String getAnimal() {
        return animal;
    }
    public void setAnimal(String animal) {
        this.animal = animal;
    }
    public String getComment() {
        return comment;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
    public int getVotes() {
        return votes;
    }
    public void setVotes(int votes) {
        this.votes = votes;
    }
    public boolean isApproved() {
        return approved;
    }
    public void setApproved(boolean approved) {
        this.approved = approved;
    }

    
}
