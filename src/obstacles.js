class Obstacles {
    constructor(randomY) {
        this.x = width;
        this.y = randomY;
        this.img = game.coinImg;
        this.width = this.img.width;
        this.heigth = this.img.height;
    }

    checkCollision(player) {
        let leftSide = this.x;
        let rightSide = this.x + this.width;
        let playerLeftSide = player.x;
        let playerRightSide = player.x + player.width;
        
        let topSide = this.y;
        let downSide = this.y + this.height;
        let playerTopSide = player.y;
        let playerDownSide = player.y + player.height;

        let xCollision = 
        leftSide > playerLeftSide - 10 &&
        leftSide < playerRightSide + 10 &&
        rightSide > playerLeftSide - 10 &&
        rightSide < playerRightSide + 10;

        let yCollision = 
        topSide > playerTopSide - 10 &&
        topSide < playerDownSide + 10 &&
        downSide > playerTopSide - 10 &&
        downSide < playerDownSide + 10;

        if (yCollision && xCollision) {
            return true;
        } else {
            return false;
        }
    }

    drawingObstacles() {
        this.x -= 2;
        image(this.img, this.x, this.y, 200, 200);
    } 
}