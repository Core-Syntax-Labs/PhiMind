import { Router } from "express";
import { FavoriteService } from "../services/favorite.service";

const router = Router();

// Criar favorito
router.post("/", async (req, res) => {
  try {
    const { text, author, userId } = req.body;

    const result = await FavoriteService.create({ text, author, userId });

    return res.status(201).json(result);

  } catch (error) {
    if (error instanceof Error) return res.status(400).json({ error: error.message });
    return res.status(500).json({ error: "Erro ao criar favorito" });
  }
});

// Listar favoritos de 1 usuário
router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);

    const result = await FavoriteService.listByUser(userId);

    return res.status(200).json(result);

  } catch (error) {
    if (error instanceof Error) return res.status(400).json({ error: error.message });
    return res.status(500).json({ error: "Erro ao listar favoritos" });
  }
});

router.delete("/:favoriteId", async (req, res) => {
  try {
    // Pega o ID do favorito a ser deletado
    const favoriteId = Number(req.params.favoriteId);

    const result = await FavoriteService.delete(favoriteId);

    // Retorna status 204 (No Content) para indicar sucesso na remoção
    return res.status(204).send(); 

  } catch (error) {
    if (error instanceof Error) return res.status(400).json({ error: error.message });
    return res.status(500).json({ error: "Erro ao deletar favorito" });
  }
});

export default router;
