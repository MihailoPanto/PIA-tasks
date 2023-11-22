package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.User;

public class UserRepo implements UserRepoInterface{

    @Override
    public User login(User u) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where kor_ime=? and lozinka=? and tip=?");) {
            stm.setString(1, u.getUsername());
            stm.setString(2,u.getPassword());
            stm.setString(3, u.getType());
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                u.setName(rs.getString("ime"));
                u.setSurname(rs.getString("prezime"));
                return u;
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    
}
