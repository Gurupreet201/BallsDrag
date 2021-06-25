let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
    balls[i].bounce();
  }
}

function mouseDragged() {
  x = random(-6, 6);
  y = random(-6, 6);
  let ball = new Ball(mouseX, mouseY, x, y);
  balls.push(ball);
}
class Ball {
  constructor(x, y, xs, xy) {
    this.x = x;
    this.y = y;
    this.xspeed = xs;
    this.yspeed = xy;
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  display() {
    strokeWeight(4);
    stroke(0);
    fill(232, 168, 124);
    circle(this.x, this.y, 30);
  }
  bounce() {
    if (this.x > width - 15 || this.x < 15) {
      this.xspeed *= -1;
    }

    if (this.y > height - 15 || this.y < 15) {
      this.yspeed *= -1;
    }
  }
}
