class Player {
constructor() {
    this.gravity = 0.1;
    this.speed = 0;
    this.jumps = 0;
    this.x = 50;
}

setupPlayer() {
    this.y = height - game.playerImg.height;
    this.width = game.playerImg.width;
    this.height = game.playerImg.height;
}

jump() {
    this.jumps += 1;

    if(this.jumps < 2) {
        this.speed = -5;
    }
}

drawingThePlayer() {
    this.speed += this.gravity;
    this.y += this.speed;

    if(this.y >= height - game.playerImg.height) {
        this.y = height - game.playerImg.height;
        this.jumps = 0;
    }
    image(game.playerImg, this.x, this.y,500,500);
}
}