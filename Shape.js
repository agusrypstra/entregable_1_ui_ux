class Shape {
  constructor(x, y, width, height, color, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = `#${this.color}`;
  }
  move(x, y) {
    this.x += x;
    this.y += y;
  }
}
export default Shape;
