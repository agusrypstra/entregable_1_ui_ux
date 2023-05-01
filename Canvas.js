class Canvas {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = `#${this.color}`;
  }
}
export default Canvas;
