//setTimeout(code delay) : delay동안 기다리다가 code를 실행


// console.log(1);
// setTimeout( () => {console.log(2)},2000);//비동기 처리로 2초를 기다렸다가 실행
// console.log(3);// 따라서 2 안기다리고 바로 실행된다. 


//편의점에 갔을 때 음료수를 사고 나오는 상황

function goMart(){
    console.log('음료를 살지 고민한다')
}

function pickDrink(callback){
    setTimeout(()=>{
        console.log('고민끝')
        product='제로콜라'
        price=2000;
        callback(product,price);
    },3000);
}
function pay(product,price){
    console.log(`상품명: ${product},가격: ${price}`);
}
//=undefine으로 뜸
//해결하고싶다면 callback 함수를 쓰세영: 비동기 방식으로 작성된 함수를 동기처리하기 위해서


let product;
let price;
goMart();
pickDrink(function(product,price){
    console.log(`상품명: ${product},가격: ${price}`);
});
pay(product,price);
//함수를 다시 불러와서 상품명과 가격을 넣어준다

// function mainFunc(parm1, parm2, callback){
//     console.log(parm1,parm2)
//     callback();
// }
// function callbackFunc(param){
//     console.log("콜백함수 입니다");
// }
// mainFunc(1,2,callbackFunc);

//콜백함수:함수 타입 파라미터 맨 마지막에 하나 더 선언
//익명함수로 처리함 보통
