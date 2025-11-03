import z from "zod";

export const ProductSchema = z.object({
  nome: z.string().min(1, "O nome do produto é obrigatório."),
  medida: z.string().min(1, "A quantidade é obrigatória."),
  unidadeMedida: z.string().min(1, "A unidade de medida é obrigatória."),
   categoria: z.string().min(1, "A categoria de medida é obrigatória."),
  fotoUrl: z
    .any()
    .refine((files) => files?.length === 1, {
      message: "Você deve selecionar uma imagem",
    })
    .transform((files) => files[0])
    .refine(
      (file) =>
        file && ["image/png", "image/jpeg", "image/jpg"].includes(file.type),
      {
        message: "A imagem deve ser JPG ou PNG",
      }
    ),
});
export type ProductData = z.infer<typeof ProductSchema>;
