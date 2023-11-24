package com.example.backend.models;

import java.time.LocalDate;
import java.util.List;

public class Order{
    private int idN;
    private String customer;
    private LocalDate date;
    private List<Item> items;
    
    public Order(int idN, String customer, LocalDate date) {
        this.idN = idN;
        this.customer = customer;
        this.date = date;
        this.items = null;
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
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }



    public List<Item> getItems() {
        return items;
    }



    public void setItems(List<Item> items) {
        this.items = items;
    }

    
}
