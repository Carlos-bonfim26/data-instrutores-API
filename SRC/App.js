import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import router from "./routes/route.js";

dotenv.config();

const app = express();

let isConnected = false;

app.use(async (req, res, next) => {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    next();
});

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à API de Instrutores!' });
});

export default app;