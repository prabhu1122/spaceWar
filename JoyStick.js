//🕹️🕹️//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class JoyStick {
  constructor(a, b, r) {
    this.joyPos = createVector(0, 0);
    this.cursorPos = createVector(0, 0);
    this.newVect = createVector(0, 0);
    this.radius = r;
    this.mouse = createVector(0, 0);
    this.borderPos = createVector(0, 0);
    var returnSpeed, velVect, dis;
    var distMag;;
    this.speed = 0;
    this.joystick = function(xMouse, yMouse) {
      push();
      translate(a, b);
      this.mouse = createVector(xMouse - a, yMouse - b);
      this.newVect = p5.Vector.sub(this.mouse, this.joyPos);
      this.angle = this.newVect.normalize().heading();
      this.borderPos = createVector(this.radius / 2 * cos(this.angle), this.radius / 2 * sin(this.angle));
      fill(180, 10, 30, .51);
      noStroke();
      strokeWeight(2);
      ellipse(this.joyPos.x, this.joyPos.y, this.radius, this.radius);
      /*noFill();
      for (var i = 0; i < 100; i++) {
        stroke(100, 0, 100 - i * (1 / 2));
        ellipse(this.joyPos.x, this.joyPos.y, i, i);
      }*/

      noFill();
      fill(180, 10, 30, 0.5);
      stroke(180, 100, 50);
      strokeWeight(1);
      ellipse(this.joyPos.x, this.joyPos.y, this.radius * .85, this.radius * .85);
      distMag = p5.Vector.sub(this.mouse, this.joyPos).mag();
      ///return to center data///
      returnSpeed = this.cursorPos.copy().normalize();
      velVect = this.cursorPos.copy();
      dis = p5.Vector.sub(velVect, this.joyPos).mag();
      this.speed = map(dis, 0, 50, 0, 3);
      
      if (mouseIsPressed) {
        if (distMag <= this.radius / 2) {
          this.cursorPos = this.mouse;
        } else if (distMag > this.radius / 2) {
          this.cursorPos = this.borderPos;
        }
      }
      else if (this.joyPos != this.cursorPos) {
        this.cursorPos.sub(returnSpeed.mult(this.speed));
      }

      fill(200, 20, 50, .5);
      //stroke(200, 20, 50);
      noStroke();
      strokeWeight(1);
      ellipse(this.cursorPos.x, this.cursorPos.y, this.radius * .45, this.radius * .45);
      noFill();
      stroke(180, 80, 100);
      strokeWeight(1);
      ellipse(this.cursorPos.x, this.cursorPos.y, this.radius * .35, this.radius * .35);
      pop();
    }
  }
}