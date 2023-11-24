package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ItemRepo;
import com.example.backend.models.Item;

@RestController
@RequestMapping("/item")
@CrossOrigin(origins = "http://localhost:4200/")
public class ItemController {
    
    @GetMapping("/all")
    public List<Item> getItems(){
        return new ItemRepo().getItems();
    }

}
