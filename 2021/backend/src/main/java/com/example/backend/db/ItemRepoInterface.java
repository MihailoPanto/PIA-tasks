package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Item;
import com.example.backend.models.Order;
import com.example.backend.models.User;

public interface ItemRepoInterface {
    public List<Order> getItemsWorker();

    public User getTopCustomer();

    public List<Item> getItems();

    public int addOrder(Order o);
}
