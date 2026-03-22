import mongoose from "mongoose";
import { instrutorSchema } from "../schemas/InstrutorSchema.js";

const Instrutor = mongoose.model("Professor", instrutorSchema);

export default Instrutor;