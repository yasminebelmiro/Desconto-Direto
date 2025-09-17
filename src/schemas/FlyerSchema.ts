import z from "zod";

export const FlyerSchema = z.object({
  dataExpiracao: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Data inválida",
  }),
  fotoUrl: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Arquivo obrigatório"),
});

export type FlyerData = z.infer<typeof FlyerSchema>;
