package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Item;

public class ItemRepo implements ItemRepoInterface{

    @Override
    public List<Item> getItems() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from proizvodi");) {
            ResultSet rs = stm.executeQuery();

            List<Item> items = new ArrayList<>();
            while(rs.next()){
                Item i = new Item(rs.getString("naziv"),rs.getString("opis"),rs.getInt("cena"),rs.getBoolean("promocija"));
                items.add(i);
            }
            return items;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
