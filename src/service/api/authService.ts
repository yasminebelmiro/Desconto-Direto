import api from "./axios.ts";
import { type ConsumerRegisterData } from "../../schemas/ConsumerRegisterSchema.ts";


export async function resgiterConsumer(
  data: ConsumerRegisterData
) {
  const response = await api.post(
    "/clientes/add",
    data
  );
  return response.data;
}
