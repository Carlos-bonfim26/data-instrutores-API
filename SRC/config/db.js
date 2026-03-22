import mongoose from "mongoose";
import { configDotenv} from "dotenv";
configDotenv();

const MONGO_URI = process.env.MONGO_URI


export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Conexão com o MongoDB estabelecida com sucesso!");
    }   catch (error) {                                                         
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    } 
};