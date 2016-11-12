function printType<T>(arg: T): T {
  // return arg.constructor.name;
    return arg;
}

function printTypes<T,U,V>(arg1: T, arg2: U, arg3: V): Array<any> {
  return [printType(arg1), printType(arg2), printType(arg3)]
}

function printReversed<T>(arr: T[]): T[] {
  return arr.reverse();
}


printType<string>("Hello")

printTypes<number,string,Date>(1,"a",new Date())


class DataHolder<T> {
    constructor(public _value: T) {}

    get value() {
      return this._value;
    }
    set value(value: T) {
      this._value = value;
    }
}

let d = new DataHolder<string>("Hello");
console.log(d.value);
d.value = "World";
console.log(d.value);
let d2 = new DataHolder<number>(123);
console.log(d2.value);
d2.value = 500;
console.log(d2.value);

interface Owner {
  owner: String;
}

function printOwner<T extends Owner>(arg: T): T {
    console.log(arg.owner);  // Now we know it has a .length property, so no more error
    return arg;
}

printOwner({owner: 'Jep'})
