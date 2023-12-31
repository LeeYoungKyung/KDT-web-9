// const model = require('../model/Model');
const {User} = require('../models')//models/index에서 index는 생략된것 


////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
    res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
    res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
    res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
    console.log(req.params);
//     console.log(req.query);
//     model.db_profile(req.params, (result) => {
//         res.render('profile', { data: result[0] });
//     });

//findOne객체 반환 
//where는 객체 형태로 찾을 정보 하나를 입력
User.findOne({
    where: {id : req.params.number},
}).then((result)=>{
    res.render('profile',{data:result})
})
};
const buy = (req, res) => {};

///////////////////////////////
//POST
//회원가입
const post_signup = (req, res) => {
    // model.db_signup(req.body, () => {
    //     res.json({ result: true });
    // });

    const {userid, name, pw} = req.body
    //create 데이터 생성
    //실습과제 비밀번호 암호화 해서 저장해주기~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    User.create({userid, name, pw}).then(()=>{
        res.json({result:true})
    })
};
//로그인
const post_signin = (req, res) => {
    model.db_signin(req.body, (result) => {
        if (result.length > 0) {
            res.json({ result: true, data: result[0] });
        } else {
            res.json({ result: false });
        }
    });
    //실습 로그인
    //id를 찾아서 사용자 존재 유무 체크
    //입력된 비밀번호 암호화하여 기존 데이터와 비교
    //
};
/////////////////////////////////////////
//PATCH
const edit_profile = (req, res) => {
    // model.db_profile_edit(req.body, () => {
    //     res.json({ result: true });
    // });
    //update(수정될 정보를 개체 형태로 입력, 수정될 곳 객체 입력)
    const {name,pw,id}=req.body
    User.update({name,pw},{whrer:{id}}).then(()=>{
        res.json({result : true})
    })
};


/////////////
//delete 회원탈퇴 destroy()
module.exports = {
    main,
    signup,
    signin,
    profile,
    buy,
    post_signup,
    post_signin,
    edit_profile,
};
