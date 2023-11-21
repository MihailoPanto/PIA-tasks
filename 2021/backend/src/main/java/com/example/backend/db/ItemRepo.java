package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Item;
import com.example.backend.models.Order;
import com.example.backend.models.User;


public class ItemRepo implements ItemRepoInterface{

    @Override
    public List<Order> getItemsWorker() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from narudzbine")) {
            ResultSet rs = stm.executeQuery();
            List<Order> orders = new ArrayList<>();
            while(rs.next()){
                int idn = rs.getInt("idN");
                Order newOrder = new Order(rs.getInt("idN"),
                rs.getString("kupac"), rs.getDate("datum").toLocalDate());
                
                try (Connection conn1 = DB.source().getConnection();
                PreparedStatement stm1 = conn1.prepareStatement("select proizvod from narudzbinasadrzi where narudzbina=?")) {
                    stm1.setInt(1, idn);
                    ResultSet rs1 = stm1.executeQuery();
                    List<Item> items = new ArrayList<>();
                    while(rs1.next()){
                        Item newItem = new Item(rs1.getString("proizvod"), null, 0, 0, 0);
                        items.add(newItem);
                    }
                    newOrder.setItems(items);
                orders.add(newOrder);
                }
            }
            return orders;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    
    }

    @Override
    public User getTopCustomer() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select kupac,count(kupac) as kc from narudzbine group by kupac order by kc desc limit 1")) {
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                User cus = new User(rs.getString("kupac"), null, null, null, null, null, null);
                return cus;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Item> getItems() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from proizvodi")) {
            ResultSet rs = stm.executeQuery();
            List<Item> items = new ArrayList<>();
            while(rs.next()){
                items.add(new Item(rs.getString("naziv"), rs.getString("opis"), rs.getInt("cena"), rs.getInt("promocija"),0));
            }
            return items;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int addOrder(Order o) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("insert into narudzbine (kupac,datum) values (?,now())", Statement.RETURN_GENERATED_KEYS);
        PreparedStatement stm1 = conn.prepareStatement("insert into narudzbinasadrzi (narudzbina,proizvod,kolicina) values (?,?,?)")
        ) {
            stm.setString(1, o.getCustomer());
            stm.executeUpdate();
            // ResultSet rs = stm.getGeneratedKeys();
            try (ResultSet rs = stm.getGeneratedKeys()) {
                if (rs.next()) {
                    stm1.setInt(1, rs.getInt(1));
                } else {
                    return 1;
                }
            }
            for(Item i: o.getItems()){
                stm1.setString(2, i.getName());
                stm1.setInt(3, i.getNumberToOrder());
                stm1.executeUpdate();
            }
            return 1;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }
    
}
