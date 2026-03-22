import mongoose from "mongoose";

export const instrutorSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    CPF: { type: String, required: true, unique: true },
    CNH: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
});
