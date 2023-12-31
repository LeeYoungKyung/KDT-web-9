const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
//회원가입
router.get('/signup', controller.signup); //회원가입 페이지 열기
router.post('/signup', controller.post_signup); //데이터베이스에 회원정보 저장
//로그인
router.get('/signin', controller.signin); //로그인 페이지 열기
router.post('/signin', controller.post_signin); //로그인하기

//회원정보수정 기능
//회원정보조회 =>GET
//get 조회 방식일 때는 url을 query string 또는 파라미터 방식으로 지정
//query string 방식은 페이지 이동을 안하며 파라키터는 페이지를 이동(res.render일 때 )

router.get('/profile/:number',controller.profile)

router.patch('/profile/edit',controller.edit_profile)
//회원정보수정 =>PATCH

// //ex) 회원 구매목록을 만든다 젤 위에 있어야 함 ㅜ 왱?
// router.get('/profile/but',null)

module.exports = router;
