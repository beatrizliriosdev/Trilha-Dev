const express = require('express');
const app = express();
const port = 3000;

//middleware log Global
function logRequisicoes (req, res, next){
  console.log(`[${new Date().toISOString()}] ${req.method}`);
  res.data = new data;
  next()
}

app.use(logRequisicoes);

//ROTAS

app.get("/", (req, res) => {
  res.send('<h1>Página Inicial</h1>');
});

app.get("/sobre", (req, res) => {
  res.send('<h2>Página sobre a nossa empresa</h2>');
});

app.get("/contato", (req, res) => {
 res.json({ mensagem: 'Formulário de contato enviado!' })
})

//middleware log - Global
function logRequisicoes (req, res, next){
  console.log(`[${new Date().toISOString()}] ${req.method}`);
  res.data = new data;
  next()
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});