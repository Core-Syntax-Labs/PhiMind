import React, { createContext, useContext, useEffect, useState } from "react";
import * as Crypto from "expo-crypto";
// import { openDatabase, getDb } from "../database/db";

// Representa o usuário logado no app (o que guardar no contexto)
export interface AuthUser {
  id: number;
  email: string;
}

// Tipo das funções que o contexto vai expor para o app
interface AuthContextData {
  user: AuthUser | null;
  loading: boolean;   // útil pra saber se estamos checando sessão inicial
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}
