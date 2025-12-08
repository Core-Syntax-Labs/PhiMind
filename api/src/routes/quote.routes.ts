import { Router } from "express";
import { QuoteService } from "../services/quote.service";

const router = Router();

router.get("/random", async (req, res) => {
  try {
    const quote = await QuoteService.getRandomPhilosophyQuote();
    return res.status(200).json(quote);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar citação" });
  }
});

export default router;
