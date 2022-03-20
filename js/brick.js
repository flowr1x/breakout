export class Brick {
    constructor(width, height, layer) {
        this.width = width;
        this.height = height;

        this.layer = layer;

        this.level = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        
        this.color = "#000";

        this.coordsBricks = this.initBricks(this.width, this.height);
        
    }

    initBricks(width, height) {
        const bricks = [];

        for (let y = 0; y < this.level.length; y++) {
            for (let x = 0; x < this.level[y].length; x++) {
                const block = this.level[y][x];

                if (block) {
                    bricks.push( {x: width * x, y: height * y, w: width, h: height, active: true} );   
                }
            }
        }

        return bricks;
    }

    drawBricks() {
        for (let y = this.coordsBricks.length - 1;  y >= 0; y--) {
            const brick = this.coordsBricks[y];
            if (brick.active) {
                this.paintBlock(brick.x, brick.y, brick.w, brick.h);
            }
        }
    }

    paintBlock(x, y, width, height) {
        this.layer.ctx.fillStyle = "#222323";
        this.layer.ctx.strokeStyle = "#f0f6f0";
        this.layer.ctx.lineWidth = 2;
        this.layer.ctx.fillRect(x, y, width, height);
        this.layer.ctx.strokeRect(x, y, width, height);
    }

}