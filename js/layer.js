export class Layer {
    constructor(container) {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        container.append(this.canvas);

        this.fitToContainer(this.canvas);
        addEventListener("resize", () => this.fitToContainer(this.canvas));

        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    fitToContainer(cnv) {
        cnv.width = cnv.offsetWidth;
        cnv.height = cnv.offsetHeight;
    }
}