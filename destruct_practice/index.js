const express = require('express');
const multer = require('multer')
const path = require('path')
const app = express();
const PORT = 8000;

//ejs
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

const upload = multer({storage})
//router
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/upload',upload.array('files'),(req,res)=>{
    console.log(req.files)
    res.send(req.files)

})

//server open
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
