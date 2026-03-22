import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGOURI = process.env.MONGO_URI


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("Conexão com o MongoDB estabelecida com sucesso!");
    }   catch (error) {                                                         
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    } 
};