import api from "../lib/axios.ts";
import type { ProductData } from "../schemas/ProductSchema.ts";

export const ProductService = {
  getAll: async () => {
    try {
      const response = await api.get("/produtos/all");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await api.get(`/produtos/find/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      throw error;
    }
  },
  uploadImage: async (id: string, data: FormData) => {
    try {
      const response = await api.post(
        `/produtos/upload-foto-produto/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      throw error;
    }
  },
  create: async (data: ProductData) => {
    try {
      const response = await api.post(`/produtos/add`, data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      throw error;
    }
  },
  update: async (data: ProductData) => {
    try {
      const response = await api.put("/produtos/edit", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar produto:", error);
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const response = await api.delete(`/produtos/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      throw error;
    }
  },
};
