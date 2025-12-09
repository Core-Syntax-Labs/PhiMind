import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333", // Seu IP de rede
  timeout: 10000,
});

// Descubra pelo terminal com "ipconfig" (Windows feioso) ou "ip a" (Linux perfeito).
// Depois testa no navegador do PC se http://SEU_IP:3333/ responde a rota "/" da API.
