import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      // Dados enviados pelo app
      const { name, email, password } = req.body;

      // Chama o service que faz a lógica real
      const result = await AuthService.register({
        name,
        email,
        password,
      });

      return res.status(201).json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const result = await AuthService.login({
        email,
        password,
      });

      return res.json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  },
};
