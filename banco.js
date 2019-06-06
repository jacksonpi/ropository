const Sequelize = require('sequelize')  //CMD = npm install sequelize --save e npm install mysql2 --save
const sequelize = new Sequelize('teste','root','',{
    host:"localhost", dialect:'mysql'
})

//Apenas para saber se foi conectado com sucesso (Aparece no console)
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar"+erro)
})

//Criando tabela no mysql
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})  força a criação da tabela


//adicona campos a tabela
Postagem.create({
    titulo:"Qualquer",
    conteudo:"Ow besteira besta"
})