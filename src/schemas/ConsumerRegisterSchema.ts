import z from "zod";

export const ConsumerRegisterSchema = z
  .object({
    id: z.number().optional(),
    nome: z.string().min(1, "Campo obrigatório!"),
    telefone: z.string().min(9, "Campo obrigatório!"),
    email: z.string().email("Email inválido").min(1, "Email inválido"),
    senha: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
    confirmarSenha: z.string().min(1, "As senhas devem ser identicas"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas devem ser idênticas",
    path: ["confirmarSenha"],
  });

export type ConsumerRegisterData = z.infer<typeof ConsumerRegisterSchema>;
