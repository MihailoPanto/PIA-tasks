package com.example.backend.models;

public class Animal {
    private int idZ;
    private String name;
    private int weight;
    public Animal(int idZ, String name, int weight) {
        this.idZ = idZ;
        this.name = name;
        this.weight = weight;
    }
    public int getIdZ() {
        return idZ;
    }
    public void setIdZ(int idZ) {
        this.idZ = idZ;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight = weight;
    }


}
