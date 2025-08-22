import z from "zod";

export const ConsumerRegisterSchema = z.object({
  name: z.string().min(1, "Campo obrigatório!"),
  cellphone: z.string().min(9, "Campo obrigatório!"),
  email: z.string().email("Email inválido").min(1, "Email inválido"),
  password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(1, "As senhas devem ser identicas"),
});

export type ConsumerRegisterData = z.infer<typeof ConsumerRegisterSchema>