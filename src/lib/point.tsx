export default class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toLin() {
    return [this.x, this.y].join(",");
  }
}
