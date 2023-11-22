package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.AnimalRepo;
import com.example.backend.models.Animal;

@RestController
@RequestMapping("/animal")
@CrossOrigin(origins = "http://localhost:4200/")
public class AnimalController {
    
    @GetMapping("/all")
    public List<Animal> getAnimals(){
        return new AnimalRepo().getAnimals();
    }
}
