const mongoose = require("mongoose")

//configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1:27017/aprendendo", {
    
}).then(() => {
    console.log("MongoDB Conectado....")
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+erro)
})

//model- Usuários
//definindo o model
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
    nacionalidade: {
        type: String
    }
})
//collection
mongoose.model('usuarios', UsuarioSchema )
const novo = mongoose.model('usuarios')
new novo({
    nome: "joao",
    sobrenome: "henryque",
    email: "henryque_joao@hotmail.com",
    idade: 29,
    nacionalidade: "Brasil"
}).save().then(() => {
    console.log("Usuario criado com sucesso!")
}).catch((erro) => {
    console.log("Houve um erro ao registrar o usuario: "+erro)
})


