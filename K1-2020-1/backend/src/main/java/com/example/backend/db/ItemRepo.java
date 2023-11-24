package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import com.example.backend.models.Item;
import com.example.backend.models.Order;

public class ItemRepo implements ItemRepoInterface{

    @Override
    public List<Item> getItems() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from proizvodi")) {
            List<Item> items = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                Item i = new Item(rs.getInt("idP"), rs.getString("naziv"), rs.getInt("cena"), rs.getInt("kolicina"));
                items.add(i);
            }
            return items;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int update(Order o) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update proizvodi set kolicina=kolicina-? where idP=?")) {
            stm.setInt(1, o.getQuantity());
            stm.setInt(2, o.getItem());
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }
    
}
