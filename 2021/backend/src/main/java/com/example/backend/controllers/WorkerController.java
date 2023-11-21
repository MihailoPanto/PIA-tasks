package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ItemRepo;
import com.example.backend.models.Order;
import com.example.backend.models.User;

@RestController
@RequestMapping("/worker")
@CrossOrigin(origins = "http://localhost:4200/")
public class WorkerController {
    
    @GetMapping("/orders")
    public List<Order> getOrders(){
        return new ItemRepo().getItemsWorker();
    }

    @GetMapping("/customer")
    public User getTopCustomer(){
        return new ItemRepo().getTopCustomer();
    }
}
