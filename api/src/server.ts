// api/src/server.ts

import express from 'express';
import cors from 'cors';
import { AuthService } from "./services/auth.service";
import favoriteRoutes from "./routes/favorite.routes";
import { prisma } from './prisma';

const app = express();
app.use(express.json());
app.use(cors());
app.use("/favorites", favoriteRoutes);

// rota teste
app.get('/', (req, res) => {
  res.json({ message: 'PhiMind API no ar' });
});

// rota teste Prisma: lista usuários
app.get('/test-users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: { favorites: true },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar usuários' });
  }
});

app.post('/register', async (req, res) => {
  try {
    // 1. Receber os dados do corpo da requisição
    const { name, email, password } = req.body;

    // 2. Chamar o Service com os dados. O Service lida com a lógica, hash e banco.
    const result = await AuthService.register({ name, email, password });

    return res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor durante o registro.' });
  }
});

app.post('/login', async(req, res) =>{
  try{
    const {email, password} = req.body;

    const result = await AuthService.login({email, password});

    return res.status(200).json({result});
  }catch(error){
    if (error instanceof Error){
      return res.status(400).json({error: error.message})
    }
    console.error(error);
    return res.status(500).json({error: 'Erro interno no servidor durante login'})
  }

})

const PORT = process.env.PORT ?? 3333;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
