import z from "zod";

export const FlyerSchema = z.object({
  dataExpiracao: z.string(),
  fotoUrl: z
    .any()
    .refine((files) => files?.length === 1, "É necessário enviar um arquivo de imagem"),
});


export type FlyerData = z.infer<typeof FlyerSchema> 