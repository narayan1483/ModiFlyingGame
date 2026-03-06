<%@page import="model.User"%>

<%

User user=(User)session.getAttribute("user");

if(user==null){
response.sendRedirect("login.jsp");
}

%>

<!DOCTYPE html>
<html>

<head>

<title>Dashboard</title>

<link rel="stylesheet" href="css/style.css">

<style>

body{

margin:0;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

font-family:Segoe UI;

background:linear-gradient(135deg,#1e3c72,#2a5298);

overflow:hidden;

}


/* floating background animation */

body::before{

content:"";

position:absolute;

width:200%;

height:200%;

background:url('images/background.png');

opacity:0.08;

animation:moveBg 60s linear infinite;

}

@keyframes moveBg{

0%{transform:translateX(0)}

100%{transform:translateX(-50%)}

}


.home{

text-align:center;

background:rgba(255,255,255,0.1);

padding:60px;

border-radius:20px;

backdrop-filter:blur(12px);

box-shadow:0 0 30px rgba(0,0,0,0.4);

}


/* welcome animation */

.home h1{

color:white;

font-size:38px;

margin-bottom:40px;

animation:glow 2s infinite alternate;

}

@keyframes glow{

from{ text-shadow:0 0 10px #fff }

to{ text-shadow:0 0 25px #00eaff }

}


/* buttons */

.btn{

display:inline-block;

margin:10px;

padding:14px 30px;

border-radius:10px;

text-decoration:none;

color:white;

font-size:18px;

transition:0.3s;

}


/* colors */

.btn:nth-child(2){

background:#27ae60;

}

.btn:nth-child(3){

background:#3498db;

}

.btn:nth-child(4){

background:#e74c3c;

}


.btn:hover{

transform:scale(1.1);

box-shadow:0 0 15px white;

}

</style>

</head>

<body>

<div class="home">

<h1>Welcome <%=user.getUsername()%></h1>

<a class="btn" href="game.jsp">Play Game</a>

<a class="btn" href="leaderboard.jsp">Leaderboard</a>

<a class="btn" href="index.jsp">Logout</a>

</div>

</body>

</html>