const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');



router.get('/',controller.main)
//전체 목록보기
router.get('/comments', controller.comm)
//상세보기
router.get('/comment/:name',controller.comment)

module.exports = router; //외부에서 접근 할 수 있게 만들어 줌
