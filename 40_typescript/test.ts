let ab: string = "hi";

console.log(ab);

//타입스크립트의 기본 형태

let b: number = 1;
let c: boolean = true;
let d: object = {
  name: "yk",
  age: 20,
};

console.log(b, c, d);

//typescript를 쓰는 이유
//1)js로 실행 시 타입체크가 없어 의도와 다른 방식으로 쓰일 수 있음
//2)정적 파일언어->실행하지 않고 코드 상의 에러를 알려줌 (실시간 디버깅)

//배열
let arr: string[] = ["hi", "bye"]; //문자열 배열
let numArr: number[] = [1, 2, 3, 4, 5]; //숫자열 배열
//let numArr = [1, 2, 3, 4, 5]; (이렇게도 사용가능)

//객체
let person: {
  name: string;
  age: number;
}[];
//let person={} 이렇게 쓰면 객체 하나
person = [
  {
    name: "yk",
    age: 25,
  },
];

