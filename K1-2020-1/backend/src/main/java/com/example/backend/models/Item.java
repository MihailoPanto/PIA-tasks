package com.example.backend.models;

public class Item {
    private int idP;   
    private String name;
    private int price;
    private int quantity;
    public Item(int idP, String name, int price, int quantity) {
        this.idP = idP;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    public int getIdP() {
        return idP;
    }
    public void setIdP(int idP) {
        this.idP = idP;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    
}
