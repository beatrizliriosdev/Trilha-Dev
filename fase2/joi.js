const express = require('express');
const Joi = require('joi'); 

const app = express();
app.use(express.json());


const usuarioSchema = Joi.object({
  nome: Joi.string().min(3).required(),
  email: Joi.string().email().required(), 
  idade: Joi.number().integer().min(18).optional() 
});

app.post('/usuarios', (req, res) => {
  const dadosDoUsuario = req.body;

  const { error, value } = usuarioSchema.validate(dadosDoUsuario);


  if (error) {
    console.log(error.details);
    return res.status(400).json({ erro: error.details[0].message });
  }


  console.log('Dados do usuário são válidos:', value);
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: value });
});

app.listen(3000, () => console.log('Servidor rodando.'));