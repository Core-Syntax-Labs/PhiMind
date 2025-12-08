import { prisma } from "../prisma";

interface CreateFavoriteDTO {
  text: string;
  author: string;
  userId: number;
}

export class FavoriteService {

  // salva um favorito no banco
  static async create(data: { text: string; author: string; userId: number }) {
    const { text, author, userId } = data;

    if (!text || !author || text.trim() === "" || author.trim() === "") {
        throw new Error("O texto e o autor do favorito são obrigatórios.");
    }

    const favorite = await prisma.favorite.create({
      data: {
        text,
        author,
        userId,
      },
    });

    return favorite;
  }

  // lista favoritos de um usuário
  static async listByUser(userId: number) {

    // ❗ valide se userId é válido
    if (!userId || isNaN(userId) || userId <= 0) {
        throw new Error("O ID do usuário é inválido.");
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      orderBy: { id_favorite: "desc" },
    });

    return favorites;
  }

  static async delete(favoriteId: number) {
    
    // 1. Validação de favoriteId
    if (!favoriteId || isNaN(favoriteId) || favoriteId <= 0) {
        throw new Error("O ID do favorito é inválido.");
    }

    try {
      // 2. Tenta deletar
      await prisma.favorite.delete({
        where: { id_favorite: favoriteId },
      });

      return { message: `Favorito ${favoriteId} deletado com sucesso.` };
      
    } catch (error) {
      // 3. Trata erro do Prisma (Registro não encontrado: P2025)
      if (typeof error === 'object' && error !== null && 'code' in error) {
        if ((error as any).code === 'P2025') {
          throw new Error(`Favorito com ID ${favoriteId} não encontrado.`);
        }
      }
      // Relança outros erros
      throw error;
    }
}
}
