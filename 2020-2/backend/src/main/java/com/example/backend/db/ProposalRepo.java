package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Proposal;
import com.example.backend.models.User;

public class ProposalRepo implements ProposalRepoInterface{

    @Override
    public int addProposal(Proposal p) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("insert into predlozi (posetilac,zivotinja,komentar,glasovi,odobren) values (?,?,?,?,?)");) {
            stm.setString(1, p.getVisitor());
            stm.setString(2, p.getAnimal());
            stm.setString(3, p.getComment());
            stm.setInt(4, p.getVotes());
            stm.setBoolean(5, p.isApproved());
            stm.executeUpdate();
            return 1;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public List<Proposal> getProposals() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from predlozi");) {
            ResultSet rs = stm.executeQuery();
            List<Proposal> proposals = new ArrayList<>();
            while(rs.next()){
                proposals.add(new Proposal(rs.getInt("idP"),
                rs.getString("posetilac"), 
                rs.getString("zivotinja"),
                rs.getString("komentar"), 
                rs.getInt("glasovi"), 
                rs.getBoolean("odobren")));
            }
            return proposals;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Integer> getVotes(User u) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select idP from glasovi where posetilac=?");) {
            stm.setString(1, u.getUsername());
            ResultSet rs = stm.executeQuery();
            List<Integer> votes = new ArrayList<>();
            while(rs.next()){
                votes.add(rs.getInt("idP"));

            }
            return votes;
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int vote(Proposal p) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update predlozi set glasovi=glasovi+1 where idP=?")){
            stm.setInt(1, p.getIdP());
            stm.executeUpdate();
            try(PreparedStatement stm1 = conn.prepareStatement("insert into glasovi (idP,posetilac) values (?,?)")){
                stm1.setInt(1, p.getIdP());
                stm1.setString(2, p.getVisitor());
                stm1.executeUpdate(); 
            } catch (Exception e) {
            // TODO: handle exception
            }
            return 1;  
        } catch (Exception e) {
            // TODO: handle exception
        }
        return 0;
    }

    @Override
    public int approve(Proposal p) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update predlozi set odobren=1 where idP=?")){
            stm.setInt(1, p.getIdP());
            int val = stm.executeUpdate();
            if(val==1) return 1;  
        } catch (Exception e) {
            // TODO: handle exception
        }
        return 0;
    }

    @Override
    public int decline(Proposal p) {
        try(Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("delete from predlozi where idP=?")){
            stm.setInt(1, p.getIdP());
            int val = stm.executeUpdate();
            if(val==1) return 1;  
        } catch (Exception e) {
            // TODO: handle exception
        }
        return 0;
    }
    
}
