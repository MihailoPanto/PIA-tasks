package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Animal;

public class AnimalRepo implements AnimalRepoInterface{
    @Override
    public List<Animal> getAnimals() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from zivotinje");) {
            ResultSet rs = stm.executeQuery();
            List<Animal> animals = new ArrayList<>();
            while(rs.next()){
                animals.add(new Animal(rs.getInt("idZ"), rs.getString("naziv"), rs.getInt("tezina")));
            }
            return animals;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int addAnimal(Animal a) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("insert into zivotinje (naziv,tezina) values (?,?)");) {
            stm.setString(1, a.getName());
            stm.setInt(2, a.getWeight());
            int val=stm.executeUpdate();
            if(val==1) return 1;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }
}
