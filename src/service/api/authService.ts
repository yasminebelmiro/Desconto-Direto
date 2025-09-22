import api from "./axios.ts";
import { type ConsumerRegisterData } from "../../schemas/ConsumerRegisterSchema.ts";
import type { MerchantData } from "../../schemas/MerchantRegisterSchema.ts";

export async function resgiterConsumer(data: ConsumerRegisterData) {
  try {
    const response = await api.post("clientes/add", data);
    return response.data;
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Não foi possível conectar ao servidor. Verifique se a API está rodando."
      );
    }
    throw error;
  }
}

export async function registerMerchant(data: MerchantData) {
  try {
    const response = await api.post("/comercios/add", data);
    return response.data;
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Não foi possível conectar ao servidor. Verifique se a API está rodando."
      );
    }
    throw error;
  }
}

interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  categoria?: string; // se for merchant
  ofertas?: any[];
  ofertasPreferidas?: any[];
}

export async function login(email: string, senha: string, endpoint: string) {
  const response = await api.get<User[]>(endpoint);
  const data = response.data;

  const user = data.find((u) => u.email === email && u.senha === senha);

  if (!user) throw new Error("Email ou senha inválidos");

  const userId = user.id;
  const role: "merchant" | "consumer" = user.categoria
    ? "merchant"
    : "consumer";

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("role", role);
  localStorage.setItem("userId", userId.toString());

  return { ...user, role, userId };
}

export const LogOut = () => {
  localStorage.clear();
};
