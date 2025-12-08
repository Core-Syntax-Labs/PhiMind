import React, { createContext, useContext, useState, ReactNode } from "react";
import { api } from "../database/api";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextData = {
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  async function signIn(email: string, password: string) {
    try {
      setLoading(true);

      const response = await api.post("/login", { email, password });

      // dependendo do formato que você deixou, pega um ou outro:
      const payload = response.data.result ?? response.data;

      const loggedUser = payload.user;
      if (!loggedUser) {
        throw new Error("Resposta inesperada da API de login.");
      }

      setUser({
        id: loggedUser.id,
        name: loggedUser.name,
        email: loggedUser.email,
      });

      // TODO futuro: salvar em AsyncStorage para manter sessão
    } finally {
      setLoading(false);
    }
  }

  function signOut() {
    setUser(null);
    // TODO futuro: limpar AsyncStorage
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
