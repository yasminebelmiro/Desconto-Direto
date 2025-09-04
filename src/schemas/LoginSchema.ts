import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
});

export type LoginData = z.infer<typeof UserLoginSchema>;