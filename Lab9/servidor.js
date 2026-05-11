const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

let usuarioSalvo = "";
let senhaSalva = "";

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "projects.html"));
});

app.get("/cadastra", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "cadastro.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/cadastro", (req, res) => {

    usuarioSalvo = req.body.usuario;
    senhaSalva = req.body.senha;

    res.render("resposta", {
        mensagem: "Cadastro realizado com sucesso!"
    });

});

app.post("/logar", (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    if(usuario === usuarioSalvo && senha === senhaSalva){

        res.render("resposta", {
            mensagem: `Login efetuado! Bem vindo ${usuario}`
        });

    }else{

        res.render("resposta", {
            mensagem: "Usuário ou senha incorretos!"
        });

    }

});

app.listen(80, () => {
    console.log("Servidor rodando");
});