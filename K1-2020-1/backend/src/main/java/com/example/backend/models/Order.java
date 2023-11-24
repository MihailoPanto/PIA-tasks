package com.example.backend.models;

public class Order {
    private int idN;
    private String customer; 
    private int item;
    private int quantity;
    private int itemQuantity;
    private String itemName;
    public Order(int idN, String customer, int item, int quantity) {
        this.idN = idN;
        this.customer = customer;
        this.item = item;
        this.quantity = quantity;
        this.itemQuantity = 0;
        this.itemName ="";
    }
    public String getItemName() {
        return itemName;
    }
    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
    public int getItemQuantity() {
        return itemQuantity;
    }
    public void setItemQuantity(int itemQuantity) {
        this.itemQuantity = itemQuantity;
    }
    public int getIdN() {
        return idN;
    }
    public void setIdN(int idN) {
        this.idN = idN;
    }
    public String getCustomer() {
        return customer;
    }
    public void setCustomer(String customer) {
        this.customer = customer;
    }
    public int getItem() {
        return item;
    }
    public void setItem(int item) {
        this.item = item;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    
}
