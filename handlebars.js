const express = require('express')
const app = express()
const handlebars = require('express-handlebars')//npm install --save express-handlebars
const bodyParser = require('body-parser')//npm install --save body-parser
const Post = require('./models/posts')

app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

//BodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',function(req,res){
    Post.findAll({order:[['id','DESC']]}).then(function(posts){
        res.render('home',{posts:posts})
    })
})

app.get('/cad',function(req,res){
    res.render('formulario')
})

app.post('/add',function(req,res){
   Post.create({
       titulo: req.body.titulo,
       conteudo:req.body.conteudo 
   }).then(function(){
       res.redirect('/')
   }).catch(function(erro){
       res.send("Houve um erro:"+erro)
   })
})


app.listen(8081,function(){
    console.log("Tudo ok")
})