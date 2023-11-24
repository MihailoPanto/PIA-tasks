package com.example.backend.models;

public class Item {
    private String name;
    private String description;
    private int price;
    private boolean promotion;
    public Item(String name, String description, int price, boolean promotion) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.promotion = promotion;
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
    public boolean isPromotion() {
        return promotion;
    }
    public void setPromotion(boolean promotion) {
        this.promotion = promotion;
    }

    
}
