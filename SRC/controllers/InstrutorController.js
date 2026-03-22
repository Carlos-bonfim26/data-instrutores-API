import Instrutor  from "../models/Instrutor.js";

export const createInstrutor = async (req, res) => {
  try {
    const { nome, CPF, CNH, dataNascimento } = req.body;
    const newInstrutor = new Instrutor({ nome, CPF, CNH, dataNascimento });
    await newInstrutor.save();
    res.status(201).json(newInstrutor);
  } catch (error) {
    console.error("Erro ao criar instrutor:", error);
    res.status(500).json({ message: "Erro ao criar instrutor" });
  }
};

export const getAllInstrutores = async (req, res) => {
  try {
    const instrutores = await Instrutor.find();
    res.status(200).json(instrutores);
  } catch (error) {
    console.error("Erro ao obter instrutores:", error);
    res.status(500).json({ message: "Erro ao obter instrutores" });
  }
};

export const getInstrutorById = async (req, res) => {
  try {
    const { cpf } = req.params;
    const instrutor = await Instrutor.findOne({ CPF: cpf });
    if (!instrutor) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }
    res.status(200).json(instrutor);
  } catch (error) {
    console.error("Erro ao obter instrutor:", error);
    res.status(500).json({ message: "Erro ao obter instrutor" });
  }
};

export const updateInstrutor = async (req, res) => {
  try {
    const { cpf } = req.params;
    const { nome, CNH, dataNascimento } = req.body;
    const updatedInstrutor = await Instrutor.findOneAndUpdate(
      { CPF: cpf },
      { nome, CNH, dataNascimento },
      { new: true },
    );
    if (!updatedInstrutor) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }
    res.status(200).json(updatedInstrutor);
  } catch (error) {
    console.error("Erro ao atualizar instrutor:", error);
    res.status(500).json({ message: "Erro ao atualizar instrutor" });
  }
};

export const deleteInstrutor = async (req, res) => {
  try {
    const { cpf } = req.params;
    const deletedInstrutor = await Instrutor.findOneAndDelete({ CPF: cpf });
    if (!deletedInstrutor) {
      return res.status(404).json({ message: "Instrutor não encontrado" });
    }
    res.status(200).json({ message: "Instrutor deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar instrutor:", error);
    res.status(500).json({ message: "Erro ao deletar instrutor" });
  }
};
