import { prisma } from "../prisma";
import { createHash } from "crypto"; // Expo usa hashing do próprio pacote
// OBS: no Node, usaríamos bcrypt ou crypto nativa, mas a API será consumida no Expo,
// então usa SHA-256 mesmo.

function hashPassword(raw: string): string {
  // SHA-256 simples, retornando em HEX
  return createHash("sha256").update(raw).digest("hex");
}



interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

export const AuthService = {
  async register(data: RegisterDTO) {
    const { name, email, password } = data;

    // 1) verificar se já existe usuário com esse email
    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      throw new Error("Email já cadastrado");
    }

    // 2) gerar hash seguro
    // (Crypto.digestStringAsync)
    const hashedPassword = hashPassword(password);



    // 3) criar usuário no banco
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {
      message: "Usuário registrado com sucesso",
      user: {
        id: user.id_user,
        name: user.name,
        email: user.email,
      },
    };
  },

  async login(data: LoginDTO) {
    const { email, password } = data;

    // 1) buscar usuário
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("Credenciais inválidas");

    // 2) gerar hash da senha recebida
    const hashed = hashPassword(password);


    // 3) comparar com o hash salvo
    if (hashed !== user.password) {
      throw new Error("Credenciais inválidas");
    }

    // 4) Aqui futuramente entra o JWT

    return {
      message: "Login realizado com sucesso",
      user: {
        id: user.id_user,
        name: user.name,
        email: user.email,
      },
    };
  },
};
