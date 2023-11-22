package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ItemRepo;
import com.example.backend.models.Item;
import com.example.backend.models.Order;

@RestController
@RequestMapping("/customer")
@CrossOrigin(origins = "http://localhost:4200/")
public class CustomerController {
    
    @GetMapping("/items")
    public List<Item> getItems(){
        return new ItemRepo().getItems();
    }

    @PostMapping("/order")
    public int addOrder(@RequestBody Order o){
        return new ItemRepo().addOrder(o);
    }



}
