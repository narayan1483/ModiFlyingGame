package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;

import util.DBConnection;

public class ScoreDAO {

    public void saveScore(int userId, int score){

        try{

            Connection con = DBConnection.getConnection();

            String sql = "INSERT INTO scores(user_id,score) VALUES(?,?)";

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setInt(1,userId);
            ps.setInt(2,score);

            ps.executeUpdate();

        }catch(Exception e){
            e.printStackTrace();
        }

    }

}