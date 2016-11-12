var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    function Shape(_color) {
        this._color = _color;
    }
    Object.defineProperty(Shape.prototype, "area", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "perimeter", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "Color: " + this.color;
    };
    return Shape;
}());
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(_color, _radius) {
        var _this = _super.call(this, _color) || this;
        _this._color = _color;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "perimeter", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this.radius;
        },
        set: function (radius) {
            this._radius = radius;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.toString = function () {
        return "Color: " + this.color + " Radius: " + this.radius;
    };
    return Circle;
}(Shape));
var Cylinder = (function (_super) {
    __extends(Cylinder, _super);
    function Cylinder(_color, _radius, _height) {
        var _this = _super.call(this, _color, _radius) || this;
        _this._color = _color;
        _this._radius = _radius;
        _this._height = _height;
        return _this;
    }
    Object.defineProperty(Cylinder.prototype, "area", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "perimeter", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "volume", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cylinder.prototype, "height", {
        get: function () {
            return this.height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: true,
        configurable: true
    });
    Cylinder.prototype.toString = function () {
        return "Color: " + this.color + " Radius: " + this.radius;
    };
    return Cylinder;
}(Circle));
//# sourceMappingURL=ex5.js.map