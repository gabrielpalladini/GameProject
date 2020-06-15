const game = new Game();

function preload() {
    game.preloadGame();
}

function setup() {
    createCanvas(600, 400);
    game.setup();
}

function draw() {
    game.drawingGame();
}

function keyPressed() {
    if (keyCode == 32) {
        game.player.jump();
    }
}