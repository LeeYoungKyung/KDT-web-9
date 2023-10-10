//튜플
//튜플 타입 선언
let drink: [string, number];
drink = ["cola", 2000];

//튜플 초기화
drink = ["cola", 2000];
//선언과 초기화
let drink2: [string, number] = ["cola", 2000];
//js 배열과 동일하게 인덱스 접근 가능,메서드 사용가능
// console.log(drink[0]);
//spread 연산자 사용
// console.log([...drink2, "콜라"]);
//readonly : 데이터 변경 안되게 하는것
let drink3: readonly [string, number] = ["cola", 2000];

// drink3.push('콜라')//readonly라서 push 안됨

//열거형 enum 은 기본적으로 0부터 1씩 증가하는 값을 가진다
enum Auth {
  admin = 100,
  user = 200,
  guest,
}

//enum은 문자열을 지정해 줄 수 있다
enum Delivery {
  pending = "pending",
  delivery = "delivery",
  finish = "finish",
}

let olimpic_newgame: readonly [object, boolean];

olimpic_newgame = [
  {
    name: "소트트랙",
    type: "혼성계주",
  },
  true,
];

// olimpic_newgame[1] = false;
// console.log(Auth.admin);
//any
let a: any = ["1", "2", "3", 1, 2, 3];
