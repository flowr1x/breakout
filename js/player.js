export class Player {
    constructor(layer) {
        this.layer = layer;

        this.configPlayer = {
            h: 10,
            w: 50
        }
        this.configPlayer.x = (this.layer.width - this.configPlayer.w) / 2;
        this.configPlayer.y = this.layer.height - 20;
    }

    drawPlayer({x, y, h, w}) {
        this.layer.ctx.fillStyle = "#222323";
        this.layer.ctx.strokeStyle = "#f0f6f0";
        this.layer.ctx.lineWidth = 2;
        
        this.layer.ctx.fillRect(x, y, w, h);
        this.layer.ctx.strokeRect(x, y, w, h);
    }

    updatePlayer() {
        addEventListener("keydown", this.keyDownButton.bind(this));
    }

    keyDownButton(event) {
        switch(event.keyCode) {
            case 37:   
                if (this.configPlayer.x > 0)
                    this.configPlayer.x -= 0.025; 
                break;
            
            case 39: 
                if (this.configPlayer.x < this.layer.width - this.configPlayer.w)
                    this.configPlayer.x += 0.025; 
                break;
        }
    }
}