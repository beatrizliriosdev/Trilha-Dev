const express = require('express');
const app = express();
const port = 3000;

// Middleware para que o Express entenda o (body) da requisição, pq ele não entende automaticamente
app.use(express.json());

let tarefas = [
  { id: 1, titulo: "Estudar programação", status: "em andamento" },
  { id: 2, titulo: "Ir para academia", status: "pendente" },
  { id: 3, titulo: "Comprar pão", status: "concluído" },
  { id: 4, titulo: "Ler um livro", status: "pendente" },
  { id: 5, titulo: "Levar o cachorro para passear", status: "concluído" }
];

app.get("/tarefas", (req, res) => {
  const statusQuery = req.query.status;
  if (statusQuery) {
    const tarefasFiltro = tarefas.filter(t => t.status === statusQuery);
    res.json(tarefasFiltro)
  } else {
    res.json(tarefas)
  }

});

app.get("/tarefas/:id", (req, res) => {
  const idTarefa = parseInt(req.params.id);

  const tarefasId = tarefas.find(t => t.id === idTarefa);

  if (tarefasId) {
    res.json(tarefasId);
  } else {
    res.status(404).json({ erro: "Tarefa não encontrada" });
  }

});

app.post("/adicionarTarefas", (req, res) => {
  const { titulo, status } = req.body;

  if (!titulo || !status) {
    return res.status(400).json({ erro: "Título e status são campos obrigatórios." });
  }

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo: titulo,
    status: status
  };

  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

app.put("/tarefasAtualizar/:id", (req, res) => {

  const idAtualizar = parseInt(req.params.id);

  const tarefaAtualizar = tarefas.find(t => t.id === idAtualizar);

  if (!tarefaAtualizar) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  const { titulo, status } = req.body;

  if (!titulo || !status) {
    return res.status(400).json({ erro: "Título e status são campos obrigatórios." });
  }

  tarefaAtualizar.titulo = titulo;
  tarefaAtualizar.status = status;


  res.json(tarefaAtualizar);
});


app.delete("/deletarTarefa/:id", (req, res) => {
  const deletarId = parseInt(req.params.id);

  const indice = tarefas.findIndex(t => t.id === deletarId);

  if (indice === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada." });
  }

  tarefas.splice(indice, 1);

  res.json({ mensagem: "Tarefa deletada com sucesso!" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});