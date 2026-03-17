
const canvas = document.getElementById("gameCanvas");
const gameOverSound = document.getElementById("gameOverSound");
const ctx = canvas.getContext("2d");
let music = document.getElementById("bgMusic");

/* Music ko pehle se rok do */
if (music) {
  music.pause();
  music.currentTime = 0;
}

/* background */
let bg = new Image();
bg.src = "images/background.png";

/* === SCROLLING BACKGROUND === */
let bgX = 0;          // background ka current X position
let bgSpeed = 1.5;    // background scroll speed (enemy se slow = parallax feel)

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
let gameStarted = false;

/* random enemy */
function randomEnemy() {
  return enemyImages[Math.floor(Math.random() * enemyImages.length)];
}

/* first enemy */
enemies.push({
  x: 500,
  y: Math.random() * 350 + 50,
  img: randomEnemy()
});

/* controls */
document.addEventListener("keydown", function (e) {
  if (e.code === "Space" || e.code === "ArrowUp") {
    e.preventDefault();
    handleInput();
  }
});

canvas.addEventListener("click", handleInput);
canvas.addEventListener("touchstart", function (e) {
  e.preventDefault();
  handleInput();
}, { passive: false });

/* unified input handler */
function handleInput() {
  if (!gameStarted) {
    gameStarted = true;
    if (music) {
      music.currentTime = 0;
      music.play().catch(function () {
        console.log("Music blocked by browser");
      });
    }
    velocity = -10;
    return;
  }
  if (gameRunning) {
    velocity = -10;
  }
}

/* helper: rounded rectangle */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* === SCROLLING BACKGROUND DRAW === */
function drawBackground() {
  /*
    Do baar background draw karo side by side:
    Pehla: bgX se shuru
    Doosra: bgX + canvas.width se shuru (seamless loop)
    Jab pehla screen se nikal jaaye, reset karo
  */
  ctx.drawImage(bg, bgX, 0, canvas.width, canvas.height);
  ctx.drawImage(bg, bgX + canvas.width, 0, canvas.width, canvas.height);

  /* Sirf game chal raha ho tabhi scroll karo */
  if (gameStarted && gameRunning) {
    bgX -= bgSpeed;
    if (bgX <= -canvas.width) {
      bgX = 0; /* Reset - seamless loop */
    }
  }
}

/* draw waiting screen */
function drawWaitingScreen() {
  drawBackground(); /* Scrolling background waiting screen mein bhi */
  ctx.drawImage(player, birdX, birdY, 60, 60);

  ctx.fillStyle = "rgba(0, 0, 0, 0.50)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  roundRect(ctx, canvas.width / 2 - 165, canvas.height / 2 - 90, 330, 170, 18);
  ctx.fill();

  ctx.fillStyle = "#FFD700";
  ctx.font = "bold 26px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Modi Flying Game", canvas.width / 2, canvas.height / 2 - 40);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 18px Arial";
  ctx.fillText("Press SPACE / Click to Start", canvas.width / 2, canvas.height / 2);

  ctx.font = "15px Arial";
  ctx.fillStyle = "#DDDDDD";
  ctx.fillText("Avoid the enemies!", canvas.width / 2, canvas.height / 2 + 30);

  if (Math.floor(Date.now() / 500) % 2 === 0) {
    ctx.fillStyle = "#FF6600";
    ctx.font = "bold 20px Arial";
    ctx.fillText("▼  TAP TO FLY  ▼", canvas.width / 2, canvas.height / 2 + 62);
  }
}

/* Circle collision check */
function checkCollision(ax, ay, bx, by) {
  let size = 60;
  let acx = ax + size / 2;
  let acy = ay + size / 2;
  let bcx = bx + size / 2;
  let bcy = by + size / 2;

  let dx = acx - bcx;
  let dy = acy - bcy;
  let distance = Math.sqrt(dx * dx + dy * dy);

  let collisionRadius = 18;
  return distance < collisionRadius * 2;
}

/* draw game */
function draw() {
  drawBackground(); /* Scrolling background */

  ctx.drawImage(player, birdX, birdY, 60, 60);

  for (let i = 0; i < enemies.length; i++) {
    let enemyImg = new Image();
    enemyImg.src = enemies[i].img;
    ctx.drawImage(enemyImg, enemies[i].x, enemies[i].y, 60, 60);

    enemies[i].x -= 2;

    /* new enemy spawn */
    if (enemies[i].x === 200) {
      enemies.push({
        x: 500,
        y: Math.random() * 350 + 50,
        img: randomEnemy()
      });
    }

    /* score */
    if (enemies[i].x === 80) {
      score++;
      document.getElementById("score").innerHTML = score;
    }

    /* Collision check */
    if (checkCollision(birdX, birdY, enemies[i].x, enemies[i].y)) {
      gameOver();
      return;
    }
  }

  /* Ceiling fix */
  if (birdY <= 0) {
    birdY = 0;
    velocity = 3;
  }

  /* Ground collision */
  if (birdY + 60 >= canvas.height - 10) {
    gameOver();
    return;
  }

  /* Physics */
  birdY += velocity;
  velocity += gravity;
}

/* update loop */
function update() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!gameStarted) {
    drawWaitingScreen();
    requestAnimationFrame(update);
    return;
  }

  draw();
  requestAnimationFrame(update);
}

update();

/* game over */
function gameOver() {
  if (!gameRunning) return;
  gameRunning = false;

  if (music) {
    music.pause();
    music.currentTime = 0;
  }

  if (gameOverSound) {
    gameOverSound.currentTime = 0;
    gameOverSound.play().catch(function (e) {
      console.log("Sound blocked by browser");
    });
  }

  document.getElementById("finalScore").innerText = score;
  document.getElementById("gameOverScreen").style.display = "block";
}

/* restart */
function restartGame() {
  location.reload();
}

function goHome() {
  window.location.href = "index.jsp";
}
