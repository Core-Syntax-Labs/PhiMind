import axios from "axios";
import https from "https";

const insecureAgent = new https.Agent({
  rejectUnauthorized: false, // ⚠ IGNORA certificado inválido/expirado (apenas DEV)
});

export class QuoteService {
  static async getRandomPhilosophyQuote() {
    const response = await axios.get("https://api.quotable.io/random", {
      params: {
        tags: "wisdom|philosophy",
      },
      httpsAgent: insecureAgent, // agent "relaxado" pra deixar de barrar por certificação inválida
    });

    const data = response.data;

    const originalText = data.content;
    const originalAuthor = data.author;

    // Por enquanto, sem tradução automática
    const translatedText = originalText;

    return {
      text_en: originalText,
      text_pt: translatedText,
      author: originalAuthor,
      source: "quotable",
    };
  }
}
