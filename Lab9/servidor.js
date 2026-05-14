const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var path = require("path");
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb+srv://PedroBarreto:w41rnDFrAarA8kPw@pedro-db.jxvlhje.mongodb.net/?appName=pedro-db';
const client = new MongoClient(uri, { useNewUrlParser: true });

var posts;
var usuarios;
var carros;

client.connect(function(err) {
    if (err) {
        console.log("Erro ao conectar no banco: " + err);
    } else {
        console.log("Conectado ao MongoDB!");
        var dbo = client.db("blog_bd");
        posts    = dbo.collection("posts");
        usuarios = dbo.collection("usuarios"); 
        carros   = dbo.collection("carros");   
    }
});


var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');



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

app.get('/blog', function(req, res) {
    posts.find({}).toArray(function(err, items) {
        if (err) {
            console.log(err);
            res.send("Erro ao buscar posts!");
        } else {
            res.render('blog', { listaPosts: items });
        }
    });
});

app.get('/cadastrar_post', function(req, res) {
  res.sendFile(__dirname + '/public/cadastrar_post.html');
});
 
app.post('/salvar_post', function(req, res) {
    var data = {
        titulo:   req.body.titulo,
        resumo:   req.body.resumo,
        conteudo: req.body.conteudo
    };
    posts.insertOne(data, function(err) {
        if (err) {
            console.log(err);
            res.send("Erro ao salvar post!");
        } else {
            res.redirect('/blog');
        }
    });
});

var server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...");