//Importação
const http = require('http');
const fs = require('fs');


//Aqui eu crio um servidor
http.createServer(function (req, res) {

    //Lendo o doc .txt
    fs.readFile('acredite.txt', function (err, data) {
        if (err) {
            console.error("Erro ao ler o arquivo passado:", err);
            return;
        }
        
        const numeroDePalavras = data.length;
        console.log("Número de palavras:", numeroDePalavras);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    //Adicionando mais info no final do texto, pq com appendFile eu consigo add de acordo com a documentação
    // toda vez que você aperta o F5 (atualiza a página) ele vai adiciona 'Tenha FÉ'
    fs.appendFile('acredite.txt', 'Tenha FÉ!', function (err) {
        if (err) throw err;
        console.log('Adicionou mais coisa no final do texto...!');
    });
    //Fazendo a liberação para conseguir ver na porta 8080 local
}).listen(8080);





