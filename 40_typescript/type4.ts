let value: string | number = "안녕하세요";

value = 1000;
function getValue(val: string | number | object) {
  return val;
}

getValue("hi");

//제네릭 타입으로 변경
function getValue2<T>(value: T): T {
  return value;
}

console.log(getValue2<string>("안녕하세요"));
console.log(getValue2<number>(100));

function printFunc1<T>(x: T, y: T) {
  console.log(x);
  console.log(y);
}
console.log(printFunc1<string>("hi", "hello"));

function arrElement<T>(value: T[], idx: number) {
  if (idx > arr.length - 1) {
    return false;
  } else {
    return arr[idx];
  }
}

console.log(arrElement<string>(["a", "b", "c"], 5));
