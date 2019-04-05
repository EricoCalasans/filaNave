const Sequelize = require('sequelize');
const sequelize = new Sequelize("testandomy", "root", "@Erico123", {
    host: "localhost",
    dialect: "mysql"
});
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso ao mysql!")
}).catch(function(erro){
    console.log("falha ao se conectar ao mysql: " + erro)
})

const postagem = sequelize.define("postagens",{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

postagem.create({
    titulo: "Um titulo meu",
    conteudo: "Escrevendo qualquer coisa so para testes mesmo."
})


const usuarios = sequelize.define("usuarios",{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


usuarios.create({
    nome: "Érico",
    sobrenome: "Calasans",
    idade: 26,
    email: "erico@mysql.com"
})


//usuarios.sync({force:true});