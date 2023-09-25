const model = require('../model/Model');


const main = (req,res)=>{
    res.render('index')
}

const comments = (req,res)=>{
    res.render('comments', { lists:model }) 
    //임시데이터로 만든것을 배열로 만들었음 외부에서 만들 수 있게 만들걸 
    //가져와서 배열을 전부 가져옴 그걸 변수에 넣어서 다시 배열형태로 쓰기위해 lists:model해준거임
    //comments라는 ejs파일을 만들렴
}

const comment = (req,res) => {
    console.log(req.params)
    //{name : '50'} 콜론 뒤에 붙은 변수가 key, 입력한 값이 value
    res.render('comment',{data : model [Number( req.params.name) - 1]})
}


//모듈 사용 방법

module.exports = {
    main : main,
    comm : comments,
    comment,
} 
// //하나를 보내는 것
// module.exports.main = "함수,변수,문자열,숫자"
// exports.main = null //위의 것을 축약 
// //전부보내는 것
// const test = ()=>{} 
// module.exports = test