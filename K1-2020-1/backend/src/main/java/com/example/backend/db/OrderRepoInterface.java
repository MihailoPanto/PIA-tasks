package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Order;

public interface OrderRepoInterface {

    public int addOrder(Order o);

    public List<Order> getOrders();

    public int delete(Order o);
}
