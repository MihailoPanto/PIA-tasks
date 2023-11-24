package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class Comment {
    private int idK;
    private String item;
    private String text;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate date;
    private String user;
    private String state;
    private String userName;
    private String userSurname;
    public Comment(int idK, String item, String text, LocalDate date, String user, String state) {
        this.idK = idK;
        this.item = item;
        this.text = text;
        this.date = date;
        this.user = user;
        this.state = state;
        this.userName = "";
        this.userName = "";
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getUserSurname() {
        return userSurname;
    }
    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }
    public int getIdK() {
        return idK;
    }
    public void setIdK(int idK) {
        this.idK = idK;
    }
    public String getItem() {
        return item;
    }
    public void setItem(String item) {
        this.item = item;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public String getUser() {
        return user;
    }
    public void setUser(String user) {
        this.user = user;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }

    
}
