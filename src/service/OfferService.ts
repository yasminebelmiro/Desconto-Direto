import api from "../lib/axios.ts";
import type { OfferData } from "../schemas/OfferSchema.ts";
import type { OfferTypes } from "../types/OfferTypes.ts";

export const OfferService = {
    getAll: async () => {
    try {
      const response = await api.get("/ofertas/all");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar ofertas:", error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await api.get(`/ofertas/find/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar oferta:", error);
      throw error;
    }
  },
  create: async (data: OfferData) => {
    try {
      const response = await api.post("/ofertas", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar oferta:", error);
      throw error;
    }
  },
  update: async (data: any) => {
  
    try {
      const response = await api.put("/ofertas/edit", {
        data
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao editar oferta:", error);
      throw error;
    }
  },
  delete: async (id:string) => {
    try {
      const response = await api.delete(`/ofertas/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao  oferta:", error);
      throw error;
    }
  },

}
