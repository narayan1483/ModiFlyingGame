package controller;

import dao.ScoreDAO;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;

@WebServlet("/score")

public class ScoreServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int score = Integer.parseInt(request.getParameter("score"));

        HttpSession session = request.getSession();

        model.User user = (model.User)session.getAttribute("user");

        if(user!=null){

            ScoreDAO dao = new ScoreDAO();

            dao.saveScore(user.getId(),score);

        }

    }

}