////Middleware Específico de Validação

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('<h1>Página Inicial</h1>');
});

app.get("/livre", (req, res) => {
  res.send('<h1>Rota de acesso livre!</h1>')
});

function validaKey(req, res, next) {
  const chave = "minhaChaveSecreta123";
  if (req.query.apiKey === "minhaChaveSecreta123") {
    next();
  } else {
    res.status(401).json({ erro: 'Acesso negado. Chave de acesso inválida!' })
  }
}

app.get("/restrita", validaKey, (req, res) => {
  res.send('<h2>Bem-vindo à área VIP! Informação super secreta aqui.</h2>')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
