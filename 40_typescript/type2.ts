//interface

interface Student {
  name: string;
  grade: number;
  isPassed: boolean;
}

let persons: Student[] = [
  {
    name: "yk",
    grade: 4,
    isPassed: true,
  },
];

//type
type Gender = "Female" | "Male" | "Boy" | "Girl";
const gender: Gender = "Boy";

interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game[] = [
  {
    title: "DC언체인드",
    price: 50000,
    desc: "DC 히어로&빌런 각각의 개성은 물론, 액션의 재미까지!",
    category: "액션",
    platform: "모바일",
  },
];
let heroGame_B: Game[] = [
  {
    title: "MARVEL 퓨처파이트",
    price: 65000,
    category: "롤플레잉",
    platform: "모바일",
  },
];
