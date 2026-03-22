import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import router from "./routes/route.js";
dotenv.config();
await connectDB();

const app = express();
app.use(express.json());
app.use(router);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Bem-vindo à API de Instrutores!' });
});
export default app;
