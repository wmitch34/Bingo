import APPLE from "../assets/Apple2.png";
import RUFUS from "../assets/rufus.png";

class GameObject {
  constructor(number) {
    this.size = {
      x: 200,
      y: 200,
    };
    this.top = 0;
    this.left = 0;
    this.id = number;
  }
}

class Apple extends GameObject {
  points = 100;
  image = APPLE;
  interaction = "collect and move";
  size = {
    x: 100,
    y: 100,
  };
}

class Rufus extends GameObject {
  points = 200;
  image = RUFUS;
  interaction = "collect";
}

export { Apple, Rufus };
