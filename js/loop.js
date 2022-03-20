export class Loop {
    constructor(ball, bricks, layer, player) {
        this.ball = ball;
        this.brick = bricks;
        this.layer = layer;
        this.player = player;

        this.loop = this.gameLoop.bind(this)
        this.loop();
    }

    display() {
        this.brick.drawBricks();
        this.ball.drawBall(this.ball.configBall);
        this.player.drawPlayer(this.player.configPlayer);
    }

    update() {
        this.ball.updateBall();
        
    }

    gameLoop(currentTime = 0) {
        this.layer.ctx.clearRect(0, 0, this.layer.width, this.layer.height);
        requestAnimationFrame(this.loop);

        this.update();
        this.display();
    }

}