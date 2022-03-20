export class Ball {
    constructor(layer, brick, player) {
        this.layer = layer;
        this.brick = brick;
        this.player = player;

        this.configBall = {
            x: this.layer.width / 2,
            y: this.layer.height / 2 + 70,
            vx: 2,
            vy: 2,
            radius: 5,
        };
    }

    drawBall( {x, y, radius} ) {
        this.layer.ctx.fillStyle = "#222323";
        this.layer.ctx.strokeStyle = "#f0f6f0";
        this.layer.ctx.lineWidth = 2;
        this.layer.ctx.beginPath();
        this.layer.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.layer.ctx.fill();
        this.layer.ctx.stroke();
    }

    updateBall() {
        this.configBall.x += this.configBall.vx;
        this.configBall.y += this.configBall.vy;
        this.hasCollision(this.configBall);
    }

    hasCollision( {x: ballX, y: ballY, radius, vx, vy} ) {
        const sizeBall = radius;

        if (ballX - sizeBall < 0 || sizeBall + ballX > this.layer.width)
            this.configBall.vx = -vx;
        if (ballY - sizeBall < 0 || ballY + sizeBall > this.layer.height) 
            this.configBall.vy = -vy;  

        for (let y = this.brick.coordsBricks.length - 1;  y >= 0; y--) {
            const brick = this.brick.coordsBricks[y];

            if (!brick.active) continue; 

            if (brick.x < ballX + sizeBall &&
                ballX - sizeBall < brick.x + brick.w && 
                brick.y < ballY + sizeBall &&
                ballY - sizeBall < brick.y + brick.h)
                {
                brick.active = false;
                this.configBall.vy = -vy;  
                break;
            } 
        }

        const {x: playerX, y: playerY, w: playerW, h: playerH} = this.player.configPlayer;
        if (playerX < ballX + sizeBall &&
            ballX - sizeBall < playerX + playerW && 
            playerY < ballY + sizeBall &&
            ballY - sizeBall < playerY + playerH)
            { 
                this.configBall.vy = -vy; 
        }
    }
}