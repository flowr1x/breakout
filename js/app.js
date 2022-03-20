import { Layer } from "./layer.js";
import { Brick } from "./brick.js";
import { Ball } from "./ball.js";
import { Loop } from "./loop.js";
import { Player } from "./player.js";
 
class App {
    constructor(container) {
        this.layer = new Layer(container);
        this.brick = new Brick(this.layer.width / 11, 15, this.layer);
        this.ball = new Ball(this.layer, this.brick);
        this.player = new Player(this.layer);

        this.loop = new Loop(this.ball, this.brick, this.layer, this.player);
    }
}

onload = () => {
    const container = document.querySelector(".container");
    new App(container);
}