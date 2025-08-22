import z from "zod";

export const MerchantRegisterSchema = z.object({
  name: z.string().min(1, "Campo obrigatório!"),
  phone: z.string().min(8, "Campo obrigatório!"),
  cellphone: z.string().min(9, "Campo obrigatório!"),
  adress: z.string().min(1, "Campo obrigatório!"),
  district: z.string().min(1, "Campo obrigatório!"),
  zipCode: z.string().min(1, "Campo obrigatório!"),
  email: z.string().email().min(1, "Email inválido"),
  password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
  confirmPassword: z.string().min(1, "As senhas devem ser identicas"),
});

export type MerchantRegisterData = z.infer<typeof MerchantRegisterSchema>