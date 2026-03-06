<!DOCTYPE html>
<html>
<head>

<title>Modi Flying Game</title>

<link rel="stylesheet" href="css/game.css">
<style>
   
    .creator{
        position:fixed;
bottom:10px;
right:20px;
font-size:14px;
color:#00f7ff;
opacity:0.7;
}

.game-credit b{
color:white;
    }
</style>
</head>

<body>

<div class="gameWrapper">

<h1 class="title">Modi Flying Game</h1>

<div class="creator">
Created by Narayan Prasad Maurya
</div>

<div class="gameArea">

<canvas id="gameCanvas" width="400" height="600"></canvas>

<div class="scoreBox">
Score : <span id="score">0</span>
</div>

</div>

<div id="gameOverScreen" class="gameOver">

<h2>Game Over</h2>

<p>Your Score : <span id="finalScore"></span></p>

<button onclick="restartGame()">Play Again</button>

<button onclick="goHome()" class="homeBtn">Back to Home</button>

<p class="developer">Developed by Narayan Prasad Maurya</p>

</div>

<!--<div class="credit">
Developed by Narayan Prasad Maurya
</div>-->

</div>

<audio id="bgMusic" autoplay loop>
<source src="audio/mymusic.mp3">
</audio>
    <audio id="gameOverSound">
<source src="audio/gameover.mp3">
</audio>

<script src="js/game.js"></script>

</body>
</html>