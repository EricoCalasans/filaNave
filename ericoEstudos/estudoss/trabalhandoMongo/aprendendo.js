const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/aprendendo", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB conectado")
}).catch((err) => {
    console.log("erro ao conectar ao mongoDB: "+err)
});

// Model - usuarios
//definindo model
const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }, 
    pais:{
        type: String
    }

})
//colection
mongoose.model("usuarios", UsuarioSchema)



const CadUsuarios = mongoose.model("usuarios");


new CadUsuarios({
    nome: "Erico",
    sobrenome: "Calasans",
    email: "ericobrasil@hotmail.com",
    idade: 26,
    pais: "Brasil"
}).save().then(() => {
    console.log("usuario criado com sucesso!")
}).catch(() => {
    console.log("erro ao criar usuario")
})

new CadUsuarios({
    nome: "Tathiana",
    sobrenome: "Soares",
    email: "tathi@hotmail.com",
    idade: 23,
    pais: "Brasil"
}).save().then(() => {
    console.log("usuario criado com sucesso!")
}).catch(() => {
    console.log("erro ao criar usuario")
})