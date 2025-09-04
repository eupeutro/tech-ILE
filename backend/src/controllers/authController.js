import * as authService from '../services/authService.js';

export const register = async (req, res) => {
  try {
    const { nome_usuario, email_usuario, senha_usuario, idade_usuario, contato_usuario } = req.body;
    const result = await authService.register({
      nome_usuario,
      email_usuario,
      senha_usuario,
      idade_usuario,
      contato_usuario
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email_usuario, senha_usuario } = req.body;
    const result = await authService.login({
      email_usuario,
      senha_usuario
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};