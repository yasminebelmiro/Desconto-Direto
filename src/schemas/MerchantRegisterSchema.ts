import { z } from "zod";

export const MerchantSchema = z
  .object({
    nome: z.string().min(1, "Nome da empresa obrigatório."),
    categoria: z.string().min(1, "Categoria da empresa obrigatório."),
    email: z.string().min(1, "Email obrigatório."),
    telefone: z.string().optional(),
    senha: z.string().min(6, "Senha obrigatória."),
    confirmarSenha: z.string().min(6, "Confirmar a senha é obrigatório."),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas devem ser idênticas",
    path: ["confirmarSenha"],
  });

export type MerchantData = z.infer<typeof MerchantSchema>;
