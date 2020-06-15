class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
  }

  preloadGame() {
    this.backgroundImgs = [
      { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 2 },
      // { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },
      // { src: loadImage("assets/background/plx-5.png"), x: 0, speed: 4 },
    ];
    this.playerImg = loadImage("assets/player/bird.png");
    this.coinImg = loadImage("assets/coins/BlueFish4.png");
  }  

  setup() {
    this.player.setupPlayer();
  }

  drawingGame() {
    clear();
    frameRate(50);
    this.background.drawingBackground();
    this.player.drawingThePlayer();
    
 
     if (frameCount % 90 === 0) {
      let randomNumber = random(0, height - 10);
      this.obstacles.push(new Obstacles(randomNumber));
    }
 
    this.obstacles.forEach((elem) => {
      elem.drawingObstacles();
      elem.checkCollision(this.player);
    });
 
     this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        console.log("hapening");
        return false;  
      } else {
        console.log(" not colliding");

        return true;
      }
    }); 
  }
}