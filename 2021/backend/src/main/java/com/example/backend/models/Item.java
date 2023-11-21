package com.example.backend.models;

public class Item {
    private String name;
    private String description;
    private int price;
    private int promotion;
    private int numberToOrder;
    public Item(String name, String description, int price, int promotion, int numberToOrder) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.promotion = promotion;
        this.numberToOrder = numberToOrder;
    }
    public int getNumberToOrder() {
        return numberToOrder;
    }
    public void setNumberToOrder(int numberToOrder) {
        this.numberToOrder = numberToOrder;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }
    public int getPromotion() {
        return promotion;
    }
    public void setPromotion(int promotion) {
        this.promotion = promotion;
    }

    
}
