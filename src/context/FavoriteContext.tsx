import React, { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../database/api";
import { useAuth } from "./AuthContext";

export type Favorite = {
  id_favorite: number;
  text: string;
  author: string;
  userId: number;
};

type FavoritesContextData = {
  favorites: Favorite[];
  loadingFavorites: boolean;
  loadFavorites(): Promise<void>;
  addFavorite(text: string, author: string): Promise<void>;
  removeFavorite(id_favorite: number): Promise<void>;
};

const FavoritesContext = createContext<FavoritesContextData>(
  {} as FavoritesContextData
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [loadingFavorites, setLoadingFavorites] = useState(false);

  async function loadFavorites() {
    if (!user) return;
    try {
      setLoadingFavorites(true);
      const response = await api.get<Favorite[]>(`/favorites/${user.id}`);
      setFavorites(response.data);
    } finally {
      setLoadingFavorites(false);
    }
  }

  async function addFavorite(text: string, author: string) {
    if (!user) return;
    const response = await api.post<Favorite>("/favorites", {
      text,
      author,
      userId: user.id,
    });
    setFavorites((prev) => [response.data, ...prev]);
  }

  async function removeFavorite(id_favorite: number) {
    await api.delete(`/favorites/${id_favorite}`);
    setFavorites((prev) =>
      prev.filter((fav) => fav.id_favorite !== id_favorite)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, loadingFavorites, loadFavorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
