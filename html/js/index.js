
//var let const
//var : 재선언, 재할당 모두 가능
//let : 재선언 불가능, 재할당은 가능
//const : 재선언 불가능, 재할당 불가능

let number = 1;
let string = "aaa";

let name = "yk"
console.log(`안녕하세요 ${name}입니다.`)

let names = ["영경", "영경이" , "이영경"];
names.push("이영경이");
console.log("push", names);
names.push() //넣기
names.pop()  //지우기
names.unshift() //젤앞포함
names.shift() //맨앞지우기
names.indexOf() //몇번에있 없으면 -1
names.includes() //포함하고 있없

let color = ["r","o","y","g","b","n","p"];
console.log(color[2]);

color.push("black");
console.log(color);

let index = color.indexOf("black");
console.log(index);

color.reverse();
console.log(color);


let number2 = [1,2,3,4,5];

console.log(number2[1]);
let animals = ["dog", "cat", "lion"];
        
        let cat = {
            age: 5,
            name: "냥이",
            mew: function() {
                console.log("야옹");
            }
        }

        let dog = {
            name: "초코",
        }


        console.log(cat)
        console.log(cat.age)
        cat.mew()

        console.log(dog.name)
        console.log(dog.age)


console.log(cat)
        console.log(cat.age)
        cat.mew()

        console.log(dog.name)
        console.log(dog.age)



        let me = {
            name : "이영경",
            age : "25",
            favorite_color : "black",
            mbti : "estp",
            hometown : "ulsan"
        }
    console.log(typeof me.name);
    console.log(typeof me.age);
    console.log(typeof me.favorite_color);
    console.log(me.mbti);
    console.log(me.hometown);
//undefined 자료형 
//null 값은 object
//함수는 function

//let score1 = prompt("첫번째 성적을 입력하세요.");//prompt는 문자열로 받음 따라서 숫자로 바꾸는 작업을 해야함
//let score2 = prompt("두번째 성적을 입력하세요.");

//console.log(score1,score2);


//let avg = (Number(score1) + Number(score2))/2;

//console.log(avg);    

//let num = 5;
//console.log(num.toString(),5)

/*let study = {
    "`${typeof 5}` isn't  `${typeof "안녕"}` data type."
}
console.log(typeofstudy);

let study2 = {
    "typeof를 boolean이나 null에 사ㅛㅇ하면, `${}`결과를 얻을 수 있다"
}
console.log(typeof study2);

let mathScore = prompt("수학 성적을 입력해주세요");
let engScore = prompt("영어 성적을 입력해주세요");
let avg = (Number(mathScore) + Number(engScore))/2;

console.log(avg);*/

let num = 1;
num =5;
let numString ="5";

console.log(num >= 1)
console.log(num<=1)

console.log(num==numString)//숫자5와 문자5를 같다고 표현함
console.log(num===numString)//타입을 비교하는 것 문자5와 숫자5는 다름
console.log(num!==numString)


console.log(num + 5)
console.log(num - 5)
console.log(num * 5)
console.log(num / 5)

console.log(num%2)//나머지 홀수1
console.log(8%2)//나머지 짝수 0
console.log((num%5)==0)
console.log(num**2)//거듭제곱  5의 제곱



//둘이 같음
num =num +5 //10

num*=5
//num=num+1
num++
--num
//num--


console.log(num)

console.log()

console.log(true&&false);//and
console.log(true||false);//or
console.log(!true);
console.log(num ==50 && num >=50)



