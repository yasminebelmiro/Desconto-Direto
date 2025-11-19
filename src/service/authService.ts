import type { Consumer } from "react";
import api from "../lib/axios.ts";
import { type ConsumerRegisterData } from "../schemas/ConsumerRegisterSchema.ts";
import type { MerchantData } from "../schemas/MerchantRegisterSchema.ts";
import type { MerchantTypes } from "../types/MerchantTypes.ts";
import { ConsumerService } from "./ConsumerService.ts";
import { MerchantService } from "./MerchantService.ts";
import type { ConsumerType } from "../types/ConsumerTypes.ts";

export async function resgiterConsumer(data: ConsumerRegisterData) {
  try {
    return ConsumerService.create(data).catch(console.error);
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
    return await MerchantService.create(data).catch(console.error);
  } catch (error: any) {
    if (error.code === "ERR_NETWORK") {
      throw new Error(
        "Não foi possível conectar ao servidor. Verifique se a API está rodando."
      );
    }
    throw error;
  }
}

export async function loginMerchant(email: string, senha: string) {
  try {
    const response = await api.post<MerchantTypes>("/comercios/login", {
      email: email,
      senha: senha,
    });
    localStorage.setItem("token", response.data.id.toString())
    localStorage.setItem("role", "merchant")
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

export async function loginConsumer(email: string, senha: string) {
  try {
    const response = await api.post<ConsumerType>("/clientes/login", {
      email: email,
      senha: senha,
    });
    localStorage.setItem("token", response.data.id.toString())
    localStorage.setItem("role", "consumer")
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

export async function LogOut ()  {
  localStorage.clear();
};
