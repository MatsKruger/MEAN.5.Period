class Shape {
    constructor(public _color: string) {}

    get area() {
        return undefined;
    }
    get perimeter() {
        return undefined;
    }

    get color() {
      return this._color;
    }

    set color(color: string) {
      this._color = color;
    }

    toString() {
      return `Color: ${this.color}`;
    }
}

class Circle extends Shape {
  constructor(public _color: string, public _radius: number) {
    super(_color);
  }

  get area() {
      return undefined;
  }
  get perimeter() {
      return undefined;
  }

  get radius() {
    return this.radius;
  }

  set radius(radius: number) {
    this._radius = radius;
  }

  toString() {
    return `Color: ${this.color} Radius: ${this.radius}`;
  }
}

class Cylinder extends Circle {
  constructor(public _color: string, public _radius: number, public _height: number) {
    super(_color, _radius);
  }
  get area() {
      return undefined;
  }
  get perimeter() {
      return undefined;
  }

  get volume() {
    return undefined;
  }

  get height() {
    return this.height;
  }

  set height(height: number) {
    this._height = height;
  }

  toString() {
    return `Color: ${this.color} Radius: ${this.radius}`;
  }
}
