import { createInstrutor, getAllInstrutores, getInstrutorById, deleteInstrutor } from "../controllers/InstrutorController.js";
import { Router } from "express";

const router = Router();

router.post("/instrutores", createInstrutor);
router.get("/instrutores", getAllInstrutores);
router.get("/instrutores/:cpf", getInstrutorById);
router.delete("/instrutores/:cpf", deleteInstrutor);

export default router;