<!DOCTYPE html>
<html>

<head>

<title>Leaderboard</title>

<style>

body{

margin:0;

height:100vh;

display:flex;

justify-content:center;

align-items:center;

font-family:Segoe UI;

background:linear-gradient(135deg,#1e3c72,#2a5298);

}


/* leaderboard card */

.leaderboard{

text-align:center;

background:rgba(255,255,255,0.1);

padding:40px;

border-radius:20px;

backdrop-filter:blur(12px);

box-shadow:0 0 30px rgba(0,0,0,0.4);

color:white;

}


/* title animation */

.leaderboard h1{

font-size:40px;

margin-bottom:30px;

animation:glow 2s infinite alternate;

}

@keyframes glow{

from{ text-shadow:0 0 10px white }

to{ text-shadow:0 0 25px #00eaff }

}


/* table */

table{

border-collapse:collapse;

width:300px;

margin:auto;

}


th,td{

padding:12px;

border-bottom:1px solid rgba(255,255,255,0.3);

}


th{

font-size:18px;

}


td{

font-size:16px;

}


/* hover effect */

tr:hover{

background:rgba(255,255,255,0.1);

}


/* back button */

.back{

display:inline-block;

margin-top:25px;

padding:10px 25px;

background:#3498db;

color:white;

text-decoration:none;

border-radius:8px;

transition:0.3s;

}


.back:hover{

background:#2980b9;

transform:scale(1.1);

}

</style>

</head>

<body>

<div class="leaderboard">

<h1>Leaderboard</h1>

<table>

<tr>
<th>Player</th>
<th>Score</th>
</tr>

<tr>
<td>Player1</td>
<td>50</td>
</tr>

<tr>
<td>Player2</td>
<td>40</td>
</tr>

</table>

<a class="back" href="dashboard.jsp">Back</a>

</div>

</body>

</html>