import api from "../lib/axios.ts";
import type { ConsumerRegisterData } from "../schemas/ConsumerRegisterSchema.ts";

export const ConsumerService = {
  getAll: async () => {
    try {
      const response = await api.get("/clientes/all");
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar consumidores:", error);
      throw error;
    }
  },
  getById: async (id: string) => {
    try {
      const response = await api.get(`/clientes/find/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar consumidor:", error);
      throw error;
    }
  },
  create: async (data: ConsumerRegisterData) => {
    try {
      const response = await api.post("/clientes/add", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar consumidor:", error);
      throw error;
    }
  },
  update: async (data: ConsumerRegisterData) => {
    try {
      const response = await api.put("/clientes/edit", data);
      return response.data;
    } catch (error) {
      console.error("Erro ao editar consumidor:", error);
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      const response = await api.delete(`/clientes/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao deletar consumidor:", error);
      throw error;
    }
  },
  likeOffer: async (userId: string, offerId: string) => {
    try {
      const response = await api.post(
        `/clientes/${userId}/favoritos/${offerId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao curtir oferta:", error);
      throw error;
    }
  },
  dislikeOffer: async (userId: string, offerId: string) => {
    try {
      const response = await api.delete(
        `/clientes/${userId}/favoritos/${offerId}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao descurtir oferta:", error);
      throw error;
    }
  },
};
