const canvas = document.getElementById("gameCanvas");
const gameOverSound = document.getElementById("gameOverSound");
const ctx = canvas.getContext("2d");

let music = document.getElementById("bgMusic");

/* background */

let bg = new Image();
bg.src = "images/background.png";

/* player */

let player = new Image();
player.src = "images/modi_head.png";

/* enemies */

let enemyImages = [
"images/Rahulgandhi_head.png",
"images/Mamata_Banerjee_head.png",
"images/Arvind_Kejriwal_head.png",
"images/Asaduddin_Owaisi__head.png"
];

let enemies = [];

let birdX = 80;
let birdY = 200;

let gravity = 0.6;
let velocity = 0;

let score = 0;

let gameRunning = true;

/* random enemy */

function randomEnemy(){
return enemyImages[Math.floor(Math.random()*enemyImages.length)];
}

/* first enemy */

enemies.push({
x:400,
y:Math.random()*450,
img:randomEnemy()
});

/* controls */

document.addEventListener("keydown", function(e){

if(e.code==="Space" || e.code==="ArrowUp"){
e.preventDefault();
jump();
}

});

canvas.addEventListener("click",jump);

function jump(){
if(gameRunning){
velocity = -10;
}
}

/* draw */

function draw(){

ctx.drawImage(bg,0,0,canvas.width,canvas.height);

ctx.drawImage(player,birdX,birdY,60,60);

for(let i=0;i<enemies.length;i++){

let enemyImg = new Image();
enemyImg.src = enemies[i].img;

ctx.drawImage(enemyImg,enemies[i].x,enemies[i].y,60,60);

enemies[i].x -= 2;

/* new enemy */

if(enemies[i].x == 200){

enemies.push({
x:400,
y:Math.random()*450,
img:randomEnemy()
});

}

/* score */

if(enemies[i].x == 80){

score++;
document.getElementById("score").innerHTML = score;

}

/* collision detection (accurate) */

let padding = 10;

if(
birdX + padding < enemies[i].x + 60 - padding &&
birdX + 60 - padding > enemies[i].x + padding &&
birdY + padding < enemies[i].y + 60 - padding &&
birdY + 60 - padding > enemies[i].y + padding
){
gameOver();
}

}

/* ground collision */

if(birdY + 60 >= canvas.height){

gameOver();

}

birdY += velocity;
velocity += gravity;

}

/* update */

function update(){

if(!gameRunning) return;

ctx.clearRect(0,0,canvas.width,canvas.height);

draw();

requestAnimationFrame(update);

}

update();

/* game over */

function gameOver(){

if(!gameRunning) return;

gameRunning=false;

/* stop music */

if(music){
music.pause();
music.currentTime = 0;
}

/* play game over sound */

if(gameOverSound){
gameOverSound.currentTime = 0;
gameOverSound.play().catch(function(e){
console.log("Sound blocked by browser");
});
}

document.getElementById("finalScore").innerText = score;

document.getElementById("gameOverScreen").style.display="block";

}

/* restart */

function restartGame(){
location.reload();
}

function goHome(){

window.location.href = "index.jsp";

}