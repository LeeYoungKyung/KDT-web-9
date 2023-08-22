const express = require('express');
const multer = require('multer')
const path = require('path')//폴더와 파일의 경로를 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');

//views라는 설정을 다른 폴더로 바꿀 때 사용하는 옵션
//views라는 폴더를 기본으로 사용할 때 생략이 가능하다
app.set('views','./views');



//body-parser
//req.body 즉 post전송일때 사용
// extended : 중첩되 ㄴ객체 표현을 혀용할지 말지 결정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//정적파일 
//서버실행시 http://localhost:8000/uploads/파일명
app.use('/uploads',express.static(__dirname + '/uploads'))
console.log(__dirname);

//multer세팅
//destination : (요청 파일 콜백)
const storage = multer.diskStorage({
    //destination 저장될 경로를 지정(요청객체, 업로드된 파일객체, 콜백함수)
    destination : (req, File, cb)=>{
        cb(null,'uploads/');

    },
    //filename : 파일 이름 결정(요청객체, 업로드된 파일객체, 콜백함수)
    filename : (req,file,cb)=>{
        //extname : 확장자를 추출
        const ext = path.extname(file.originalname)
        //basename : 파일이름 추출(파일이름, 확장자)=>확장자를 제외해서 파일이름이 추출
    
        const newName = path.basename(file.originalname, ext)+Date.now() + ext
        cb(null,newName)
    }
})
//파일 크기 제한
const limits = {
    fileSize : 5*1024*1024 //5mb

}
//key:value 에서 키 값과 vlaue의 변수가 동일하면 합칠 수 있음
// const upload = multer({storage:storage , limits:limits})

const upload = multer({storage ,limits})

//single()
app.post('/upload',upload.single('userfile'), (req,res)=>{
    console.log(req.file) //ejs파일에 name이 userfile인게 올라오고
    res.send(req.body)// ejs파일에 name이 title인게 올라옴
})


//멀티 array
app.post('/upload/array',upload.array('userfiles'),(req,res)=>{
    console.log(req.files);
    res.send(req.body);
})

//멀티 fields()
app.post('/upload/fields',upload.fields([{name:"userfile1", maxCount:2},{name:"userfile2"}]),(req,res,err)=>{
    if(err){
        console.log(err)
        res.status(404).send('오류')
    }
    console.log(req.files)
    res.send(req.body)
})
//동적(비동기)

app.post('/dynamic',upload.single('dynamic'),(req,res)=>{
    console.log(req.file)
    res.send(req.file)
    //이렇게해야 프론트로 정보가 간다 
})






app.get('/', (req, res) => {
    res.render('index');
});

//router
//페이지를 지정할때는 미들웨어 use를 사용한다
//단 use는 http전송 방식을 이해하지 못하기에 get을 대표적으로 사용
//같은 url로 get,post를 만들 수 있지만 use로는 접근이 어려움
//예를 들어 get 방식의 '/login'과 post방식의 '/login'은 다른 페이지이지만 
//use는 동일한 페이지로 인식
//use는 404페이지일때 사용
//젤 밑에 사용함
app.use('*', (req, res) => {
    res.render('404');
});






//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
