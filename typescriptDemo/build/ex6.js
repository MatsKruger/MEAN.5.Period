function printType(arg) {
    return arg;
}
function printTypes(arg1, arg2, arg3) {
    return [printType(arg1), printType(arg2), printType(arg3)];
}
function printReversed(arr) {
    return arr.reverse();
}
printType("Hello");
printTypes(1, "a", new Date());
var DataHolder = (function () {
    function DataHolder(_value) {
        this._value = _value;
    }
    Object.defineProperty(DataHolder.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
var d2 = new DataHolder(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);
function printOwner(arg) {
    console.log(arg.owner);
    return arg;
}
printOwner({ owner: 'Jep' });
//# sourceMappingURL=ex6.js.map