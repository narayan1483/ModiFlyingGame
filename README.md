# 🕊️ Modi Flying Game

<div align="center">

![Banner](https://img.shields.io/badge/🕊️-Modi%20Flying%20Game-ff6600?style=for-the-badge)
![Java](https://img.shields.io/badge/Java-JSP%20%2F%20Servlet-007396?style=for-the-badge&logo=java&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Canvas%202D-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Apache Tomcat](https://img.shields.io/badge/Apache-Tomcat-F8DC75?style=for-the-badge&logo=apache-tomcat&logoColor=black)

**A hilarious Flappy Bird–style web game where Modi Ji flies through the sky
and dodges rival political leaders! 😂**

> *"Fly high, dodge rivals, and survive the political storm!"* 🌪️

*Created by **Narayan Prasad Maurya***

</div>

---

## 😂 What Is This Game?

Ever wondered what it'd be like if **Modi Ji could fly**? Well, now he can! 🕊️

This is a **Flappy Bird–inspired** browser game where:
- 🕊️ **Modi Ji** flies through a beautiful sky
- 😤 **Rival leaders** come as obstacles — dodge them!
- ☁️ **Clouds** float by as you soar through the air
- 💯 **Score** goes up as you survive longer
- 🏆 **Leaderboard** tracks the top survivors

Built with **Java JSP, Servlet, JavaScript Canvas & MySQL** — a full-stack funny game! 🎮

---

## 📸 Screenshots

> 📌 All screenshots stored in `web/images/` folder in the repository.

### 🏠 Home Screen — *"Fly Modi Ji and dodge the rivals"*
![Home](https://raw.githubusercontent.com/narayan1483/ModiFlyingGame/master/web/images/homeji.png)

---

### 🔐 Login Page
![Login](https://raw.githubusercontent.com/narayan1483/ModiFlyingGame/master/web/images/loginji.png)

---

### 📝 Register Page
![Register](https://raw.githubusercontent.com/narayan1483/ModiFlyingGame/master/web/images/registerji.png)

---

### 🕹️ Gameplay — Modi Ji is Flying! 🕊️
![Gameplay](https://raw.githubusercontent.com/narayan1483/ModiFlyingGame/master/web/images/playgaemji.png)

---

### 💀 Game Over — *"Better luck next time, Modi Ji!"* 😂
![Game Over](https://raw.githubusercontent.com/narayan1483/ModiFlyingGame/master/web/images/gameoverji.png)


---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🕊️ **Modi Ji Flies!** | Control Modi Ji — Flappy Bird style |
| 😤 **Rival Obstacles** | Dodge Kejriwal, Rahul Gandhi, Mamata, Owaisi & more! |
| ☁️ **Sky Background** | Beautiful sky with floating white clouds |
| 🎵 **Background Music** | Fun music while playing (`mymusic.mp3`) |
| 💥 **Game Over Sound** | Epic sound on crash (`gameover.mp3`) |
| 💯 **Live Score** | Real-time score as you survive |
| 🏆 **Leaderboard** | Top players ranked by score |
| 👤 **User Auth** | Login & Register to save scores |
| 📊 **Dashboard** | Player stats & navigation |
| 🐳 **Docker Support** | Dockerfile included for deployment |
| ⚙️ **Developer Credit** | *Created by Narayan Prasad Maurya* |

---

## 🎭 Game Characters

| Character | Role | Image File |
|-----------|------|-----------|
| 🕊️ **Modi Ji** | **Player** — you control him! | `modi_head.png` |
| 🚧 **Arvind Kejriwal** | Rival obstacle 😤 | `Arvind_Kejriwal_head.png` |
| 🚧 **Rahul Gandhi** | Rival obstacle 😤 | `Rahulgandhi_head.png` |
| 🚧 **Mamata Banerjee** | Rival obstacle 😤 | `Mamata_Banerjee_head.png` |
| 🚧 **Asaduddin Owaisi** | Rival obstacle 😤 | `Asaduddin_Owaisi_head.png` |
| 🪈 **Pipe** | Classic obstacle | `pipe.png` |

> *All characters used for educational & entertainment purposes only. No political intent.* 😄

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript (Canvas 2D), JSP |
| **Game Engine** | JavaScript Canvas — `game.js`, `animation.js` |
| **Backend** | Java, JSP, Servlets |
| **Database** | MySQL |
| **Server** | Apache Tomcat / TomEE |
| **Audio** | HTML5 Audio API |
| **Deployment** | Docker |
| **IDE** | Apache NetBeans IDE 28 |

---

## 📁 Project Structure

```
ModiFlyingGame/
│
├── web/                          ← Web Pages
│   ├── audio/
│   │   ├── mymusic.mp3           ← Background music 🎵
│   │   └── gameover.mp3          ← Game over sound 💥
│   │
│   ├── css/
│   │   ├── game.css              ← Game styles
│   │   └── style.css             ← Global styles
│   │
│   ├── images/
│   │   ├── modi_head.png         ← Player Modi Ji 🕊️
│   │   ├── Arvind_Kejriwal_head.png    ← Rival 😤
│   │   ├── Rahulgandhi_head.png        ← Rival 😤
│   │   ├── Mamata_Banerjee_head.png    ← Rival 😤
│   │   ├── Asaduddin_Owaisi_head.png   ← Rival 😤
│   │   ├── background.png        ← Sky background ☁️
│   │   └── pipe.png              ← Obstacle pipe 🪈
│   │
│   ├── js/
│   │   ├── game.js               ← Core game logic
│   │   └── animation.js          ← Animations
│   │
│   ├── index.html                ← Static landing page
│   ├── index.jsp                 ← Home page
│   ├── game.jsp                  ← Game screen 🎮
│   ├── dashboard.jsp             ← Player dashboard
│   ├── leaderboard.jsp           ← Top scores 🏆
│   ├── login.jsp                 ← Login
│   └── register.jsp              ← Register
│
├── src/
│   ├── controller/
│   │   ├── LoginServlet.java
│   │   ├── RegisterServlet.java
│   │   └── ScoreServlet.java
│   ├── dao/
│   │   ├── UserDAO.java
│   │   └── ScoreDAO.java
│   ├── model/
│   │   ├── User.java
│   │   └── Score.java
│   └── util/
│       └── DBConnection.java
│
├── Dockerfile                    ← Docker support 🐳
├── build.xml
└── README.md
```

---

## ⚙️ Setup & Installation

### Prerequisites
- Java JDK 21+
- Apache Tomcat / TomEE
- MySQL Server 8.0+
- NetBeans IDE
- `mysql-connector-j-9.5.0.jar`

### 1. Clone the Repository
```bash
git clone https://github.com/narayan1483/ModiFlyingGame.git
cd ModiFlyingGame
```

### 2. Database Setup
```sql
CREATE DATABASE modi_flying_game;
USE modi_flying_game;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    score INT NOT NULL,
    played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Configure Database
Edit `src/util/DBConnection.java`:
```java
private static final String URL  = "jdbc:mysql://localhost:3306/modi_flying_game";
private static final String USER = "your_mysql_username";
private static final String PASS = "your_mysql_password";
```

### 4. Deploy on Tomcat
```
Open NetBeans → Clean and Build → Run on Tomcat
URL: http://localhost:8082/ModiFlyingGame/
```

### 5. Docker Deploy (Optional)
```bash
docker build -t modi-flying-game .
docker run -p 8082:8080 modi-flying-game
```

---

## 🎮 How to Play

| Control | Action |
|---------|--------|
| `Space` / `Click` / `Tap` | Modi Ji flies up ⬆️ |
| Do nothing | Modi Ji falls down ⬇️ |

### Rules
1. Modi Ji automatically moves forward
2. **Click / Tap / Space** to make him fly up
3. **Dodge** rival leaders coming from the right
4. **Don't hit** the ground or rivals — Game Over! 💥
5. **Survive longer** = Higher score 💯
6. **Login** to save score to leaderboard! 🏆

---

## 🐳 Docker Deployment

```bash
# Build
docker build -t modi-flying-game .

# Run
docker run -p 8082:8080 modi-flying-game

# Open browser
http://localhost:8082/ModiFlyingGame/
```

---

## 🚀 Future Plans

- [ ] More rival characters
- [ ] Power-ups (shield, slow-motion)
- [ ] Multiple difficulty levels
- [ ] Mobile touch controls
- [ ] Share score on WhatsApp/Instagram
- [ ] More funny sound effects 😂
- [ ] Animated GIF characters

---

## ⚠️ Disclaimer

> This game is made purely for **fun, entertainment & educational purposes**.  
> All political figures are used as **caricatures/cartoon characters** only.  
> **No political intent or disrespect** is meant toward any individual.  
> This is a **student project** inspired by the classic Flappy Bird game. 😄🎓

---

## 👨‍💻 Developer

<div align="center">

**Narayan Prasad Maurya**

*Full Stack Java Developer | Game Dev | JSP | Servlet | MySQL*

😄 *Built for fun, laughs & learning!* 🕊️

</div>

---

## 📄 License

This project is developed for educational and entertainment purposes.  
© 2026 Narayan Prasad Maurya. All rights reserved.

---

<div align="center">

🕊️ **Fly High · Dodge Rivals · Survive the Storm** 🌪️

😂 *The most fun Java project you'll ever see on GitHub!* 😂

⭐ *If this made you smile, give it a star!* ⭐

</div>
