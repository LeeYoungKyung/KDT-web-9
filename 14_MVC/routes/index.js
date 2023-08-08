const express = require('express');
const router=express.Router();
const controller=require('../controller/CComment')
router.get('/',controller.main);

//get 대신 use 사용해도 됨 하지만 use는 젤 위에꺼만 사요아기 때문에 잘 안씀 
//GET /comments
router.get('/comments', controller.comments)
//GET /comment/:id
router.get('/comment/:id',controller.comments)
//* 맨마지막 선언

module.exports = router;