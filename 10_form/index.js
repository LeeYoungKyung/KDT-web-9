const express = require('express')
const app = express();
const PORT =8000;

//body-parser
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//view engin
app.set("view engine","ejs");
app.set('views','./views');


app.get('/',(req,res)=>{
    console.log(req.body);
    res.render('index',{title:'폼 전송 실습'})
});



app.get('/getForm', (req,res)=>{
    console.log(req.query)
    res.render('result',{
        title:"get요청 폼 결과 확인하기",
        userInfo:req.query
    })
})
app.post('/postForm',(req,res)=>{
    console.log(req.body)
    res.render('result',{
        title:'post요청 폼 결과 확인하기',
        userInfo : req.body
    })
})
//전송하는건 post방식



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});