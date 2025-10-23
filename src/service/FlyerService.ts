import api from "../lib/axios.ts";
import type { FlyerData } from "../schemas/FlyerSchema.ts";

export const FlyerService = {
  getAll: async () => {
    try {
      const response = await api.get("/panfletos/all");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar panfletos:", error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await api.get(`/panfletos/find/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar panfleto:", error);
      throw error;
    }
  },
  uploadImage: async (id: string, data: FormData) => {
    try {
      const response = await api.post(
        `/panfletos/upload-foto-comercio/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer upload de imagem:", error);
      throw error;
    }
  },
  create: async (data: FlyerData) => {
    try {
      const response = await api.post("/panfletos/add", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar panfleto:", error);
      throw error;
    }
  },
  update: async (data: FlyerData) => {
    try {
      const response = await api.put("/panfletos/edit");
      return response.data;
    } catch (error) {
      console.error("Erro ao editar panfleto:", error);
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const response = await api.delete(`/panfletos/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar panfleto:", error);
      throw error;
    }
  },
};
