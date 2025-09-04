import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // CORS antes das rotas
app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => res.send('Servidor rodando com Prisma + MySQL!'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));