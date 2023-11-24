package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Item;
import com.example.backend.models.Order;

public interface ItemRepoInterface {
    public List<Item> getItems();

    public int update(Order o);
}
