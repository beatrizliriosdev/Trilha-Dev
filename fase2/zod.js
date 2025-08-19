const express = require('express');
const { z } = require('zod'); 
const app = express();
app.use(express.json());


const usuarioSchema = z.object({
  nome: z.string().min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Formato de email inválido." }),
  idade: z.number().int().min(18).optional()
  
});

app.post('/usuarios', (req, res) => {
  const dadosDoUsuario = req.body;

  const resultado = usuarioSchema.safeParse(dadosDoUsuario);

  
  if (!resultado.success) {
    
    const errosFormatados = resultado.error.flatten().fieldErrors;
    console.log(errosFormatados);
    return res.status(400).json({ erro: "Dados inválidos", detalhes: errosFormatados });
  }

  
  console.log('Dados do usuário são válidos:', resultado.data);
  res.status(201).json({ mensagem: 'Usuário criado com sucesso!', usuario: resultado.data });
});

app.listen(3000, () => console.log('Servidor rodando.'));