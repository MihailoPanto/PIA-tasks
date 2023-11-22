package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Animal;

public interface AnimalRepoInterface {
    public List<Animal> getAnimals();
}
