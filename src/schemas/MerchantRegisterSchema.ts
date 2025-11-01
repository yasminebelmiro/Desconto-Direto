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

export const MerchantProfileSchema = z.object({

  nome: z.string().min(1, "Nome da empresa obrigatório."),
  categoria: z.string().min(1, "Categoria da empresa obrigatório."),
  telefone: z.string().optional(),
  endereco: z.string().optional(),
  telefoneCelular: z.string().optional(),
  instagram: z.string().optional(),
  bairro: z.string().min(1, "Categoria da empresa obrigatório."),
  cep: z.string().min(1, "Categoria da empresa obrigatório."),
  fazEntrega: z
    .enum(["true", "false"])
    .transform((val) => val === "true"),
  horarioAbertura: z.string().optional(),
  horarioFechamento: z.string().optional(),
  fotoUrl:z
      .any()
      .refine((files) => files?.length === 1, {
        message: "Você deve selecionar uma imagem",
      })
      .transform((files) => files[0])
      .refine(
        (file) =>
          file &&
          ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
        {
          message: "A imagem deve ser JPG ou PNG",
        }
      ),
});

export type MerchantProfileData = z.infer<typeof MerchantProfileSchema>;
