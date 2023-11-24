package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Comment;
import com.example.backend.models.Item;

public class CommentRepo implements CommentRepoInterface{

    @Override
    public List<Comment> getItemComments(Item i) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from komentari where proizvod=? and status=?");) {
            stm.setString(1, i.getName());
            stm.setString(2, "Prihvaceno");
            ResultSet rs = stm.executeQuery();

            List<Comment> comments = new ArrayList<>();
            while(rs.next()){
                Comment c = new Comment(rs.getInt("idK"), rs.getString("proizvod"),
                 rs.getString("tekst"), rs.getDate("datum").toLocalDate(), rs.getString("korisnik"), rs.getString("status"));
                comments.add(c);
            }
            return comments;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int addComent(Comment c) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm2 = conn.prepareStatement("insert into komentari (proizvod, tekst, datum, korisnik, status) values (?,?,now(),?,?)")){
            stm2.setString(1, c.getItem());
            stm2.setString(2, c.getText());
            stm2.setString(3, c.getUser());
            stm2.setString(4, "Neobradjeno");
            
            int val=stm2.executeUpdate();
            if(val == 1) return 1;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public List<Comment> getAllComments() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from komentari");) {
            ResultSet rs = stm.executeQuery();
            List<Comment> comments = new ArrayList<>();
            while(rs.next()){
                try(PreparedStatement stm1 = conn.prepareStatement("select * from korisnici where kor_ime=?");){
                    stm1.setString(1, rs.getString("korisnik"));
                    ResultSet rs1 = stm1.executeQuery();
                    if(rs1.next()){
                        Comment c = new Comment(rs.getInt("idK"), rs.getString("proizvod"),
                        rs.getString("tekst"), rs.getDate("datum").toLocalDate(), rs.getString("korisnik"), rs.getString("status"));
                        c.setUserName(rs1.getString("ime"));
                        c.setUserSurname(rs1.getString("prezime"));
                        comments.add(c);
                    }
                }
            }
            return comments;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int accept(Comment c) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm2 = conn.prepareStatement("update komentari set status = ? where idK = ?")){
            stm2.setString(1, "Prihvaceno");
            stm2.setInt(2, c.getIdK());
            int val=stm2.executeUpdate();
            if(val==1)return 1;
        }catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public int decline(Comment c) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = 
        conn.prepareStatement("delete from komentari where idk=?")) {
            stm.setInt(1, c.getIdK());
            return stm.executeUpdate();   
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }
    
}
