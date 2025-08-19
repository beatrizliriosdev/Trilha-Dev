var http = require('http');

//Criando o servidor
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.end(); //A resposta 
}).listen(8080); // adiciono a porta que eu quero aqui 8080