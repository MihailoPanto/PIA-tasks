package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import com.example.backend.models.Order;

public class OrderRepo implements OrderRepoInterface{

    @Override
    public int addOrder(Order o) {
        try (Connection conn = DB.source().getConnection();
        //proveravamo da li ima ocena za taj predmet i tog studenta
        PreparedStatement stm = conn.prepareStatement("insert into narudzbine (kupac, proizvod, kolicina) values (?,?,?)");) {
            stm.setString(1, o.getCustomer());
            stm.setInt(2, o.getItem());
            stm.setInt(3, o.getQuantity());
            return stm.executeUpdate();
        }catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0; 
    }

    @Override
    public List<Order> getOrders() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from narudzbine")) {
            List<Order> orders = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()){
                try(PreparedStatement stm1 = conn.prepareStatement("select * from proizvodi where idP=?")){
                    stm1.setString(1, rs.getString("proizvod"));
                    ResultSet rs1 = stm1.executeQuery();
                    if(rs1.next()){
                        Order i = new Order(rs.getInt("idN"), rs.getString("kupac"), rs.getInt("proizvod"), rs.getInt("kolicina"));
                        i.setItemQuantity(rs1.getInt("kolicina"));
                        i.setItemName(rs1.getString("naziv"));
                        orders.add(i);
                    }
                }
            }
            return orders;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int delete(Order o) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("delete from narudzbine where idN=?");) {
            stm.setInt(1, o.getIdN());
            return stm.executeUpdate();
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return 0; 
    }
    
}
