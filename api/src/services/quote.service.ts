import axios from "axios";
import { localQuotes } from "../data/localQuotes";

export class QuoteService {
  static async getRandomPhilosophyQuote() {
    // 1) TENTA API EXTERNA
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      const data = response.data[0];

      return {
        text_en: data.q,
        text_pt: data.q,
        author: data.a,
        source: "zenquotes",
      };
    } catch (error) {
      console.error("Erro na API externa:", error);
    }

    //2) TENTA LISTA LOCAL
    try {
      const randomIndex = Math.floor(Math.random() * localQuotes.length);
      const quote = localQuotes[randomIndex];

      return {
        text_en: quote.text,
        text_pt: quote.text,
        author: quote.author,
        source: "local-list",
      };
    } catch (error) {
      console.error("Erro ao buscar citação local:", error);
    }

    // 3) FALLBACK FINAL (NUNCA FALHA)
    return {
      text_en: "A vida é uma obra em construção.",
      text_pt: "A vida é uma obra em construção.",
      author: "Desconhecido",
      source: "fallback",
    };
  }
}
