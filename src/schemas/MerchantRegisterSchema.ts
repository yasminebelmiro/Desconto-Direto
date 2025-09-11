import z from "zod";

export const basicSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  categoria: z.string().min(1, "Categoria obrigatório"),
  fotoUrl: z.string().optional(),
});

export const detailsSchema = z.object({
  telefone: z.string().min(1, "Telefone obrigatório"),
  whatsapp: z.string().optional(),
  instagram: z.string().optional(),
  endereco: z.string().min(1, "Endereço obrigatório"),
  bairro: z.string().min(1, "Bairro obrigatório"),
  cep: z.number().min(7, "Cep obrigatório"),
  entrega: z.string().min(1, "Entrega obrigatória"),
  horarioAbertura: z.string().min(1, "Horário de abertura obrigatório"),
  horarioFechamento: z.string().min(1, "Horário de fechamento obrigatório"),
});

export const accountSchema = z
  .object({
    email: z.string().min(1, "Email obrigatório"),
    senha: z.string().min(6, "Senha obrigatória"),
    confirmarSenha: z.string().min(6, "Confirmar a senha é obrigatório"),
    termosUso: z.boolean(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type basicFormData = z.infer<typeof basicSchema>;
export type detailsFormData = z.infer<typeof detailsSchema>;
export type accountFormData = z.infer<typeof accountSchema>;
