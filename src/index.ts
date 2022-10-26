import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(morgan('dev'));
app.use('/usuario', userRoutes);

app.listen(process.env.PORT, () =>
    console.log('Servidor rodando com sucesso', process.env.PORT)
);
