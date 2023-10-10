//js인 경우

// function jsFunc(a, b) {
//   console.log(a);
//   console.log(b);
// }

function tsFunc(a: number, b: number, c?: number): number {
  //매게 변수에도 타입을 정해줘야 함
  return a + b;
}

tsFunc(1, 2, 3);
tsFunc(4, 5);
//함수표현식 화살표 함수

const arrowTsFunc = (a: number, b: number): number => {
  return a + b;
};
//위 함수의 축약형
const arrowTsFunc2 = (a: number, b: number) => a * b;

//리턴이 없는 함수
function printFunc(a: string, b: string): void {
  console.log(a, b);
}

//never : 특정 조건에서만 빠져나갈 수 있고 어떤 조건에서는 무한 루프
//항상 함수 끝에 도달하지 않는 경우

function goingOn(a: number): never {
  while (true) {
    console.log("go");
    // if (a > 10) break;
  }
}
goingOn(1);

function sum1(a: number, b: number): void {
  console.log(a + b);
}
sum1(5, 11);

//4
function sum3(...rest: number[]) {
  const result = rest.reduce((acc, curr) => acc + curr, 0);
  return result;
}
console.log(sum3(1, 2, 3, 4, 10));
