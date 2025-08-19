const http = require("http");
const fs = require("fs");
const url = require("url");

//MINIAPI
//Aqui seria o meu index.js
http.createServer(function (req, res, url) {
  const rotas = req.url;
    if (rotas == '/') {
      res.writeHead(200);
      res.end(fs.readFileSync('index.html'))
    }
    else if (rotas == '/versiculos') {
      res.writeHead(200);
      res.end(fs.readFileSync('versiculos.html'))
      console.log("Versículos sendo mostrados...")
    } else {
      res.writeHead(400)
      res.end(fs.readFileSync('erro.html'))
      console.log("Erro - Passe uma rota correta")
    }
  }).listen(4000, () => {
    console.log("Servidor rodando na porta 4000...");
});