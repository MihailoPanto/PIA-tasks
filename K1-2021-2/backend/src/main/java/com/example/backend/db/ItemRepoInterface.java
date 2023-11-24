package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Item;

public interface ItemRepoInterface {
    public List<Item> getItems();
}
