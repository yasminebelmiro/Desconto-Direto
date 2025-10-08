import z from "zod";

export const FlyerSchema = z.object({
  dataExpiracao: z
    .string()
    .refine((date) => {
      const parsed = Date.parse(date);
      return !isNaN(parsed) && new Date(parsed) >= new Date();
    }, { message: "Data inválida ou anterior a hoje" }),

  fotoUrl: z
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

export type FlyerData = z.infer<typeof FlyerSchema>;
