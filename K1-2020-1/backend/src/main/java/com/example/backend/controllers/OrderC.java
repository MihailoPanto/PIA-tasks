package com.example.backend.controllers;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.OrderRepo;
import com.example.backend.models.Order;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:4200/")
public class OrderC {

    @PostMapping("add")
    public int addOrder(@RequestBody Order o){
        return new OrderRepo().addOrder(o);
    }

    @GetMapping("all")
    public List<Order> getOrders(){
        return new OrderRepo().getOrders();
    }

    @PostMapping("delete")
    public int delete(@RequestBody Order o){
        return new OrderRepo().delete(o);
    }
    
}
