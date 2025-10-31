import api from "../lib/axios.ts";
import type {
  MerchantData,
  MerchantProfileData,
} from "../schemas/MerchantRegisterSchema.ts";

export const MerchantService = {
  getAll: async () => {
    try {
      const response = await api.get("/comercios/all");
      return response.data;
      
    } catch (error) {
      console.error("Erro ao buscar comercios:", error);
      throw error;
    }
  },
  getById: async (id: string| null | undefined) => {
    try {
      const response = await api.get(`/comercios/find/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar comercio:", error);
      throw error;
    }
  },
  uploadImage: async (id: string, data: FormData) => {
    try {
      const response = await api.post(`/comercios/find/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer uplaod da imagem:", error);
      throw error;
    }
  },
  create: async ( data: MerchantData) => {
    try {
      const response = await api.post("/comercios/add", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar comercio:", error);
      throw error;
    }
  },
  update: async (data: MerchantProfileData) => {
    try {
      const response = await api.put("/comercios/edit", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar comercio:", error);
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const response = await api.delete(`/comercios/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar comercio:", error);
      throw error;
    }
  },
};
