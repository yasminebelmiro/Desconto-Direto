import z from "zod";

export const OfferSchema = z.object({
 
  preco:  z.coerce.number()
    .positive("O preço deve ser maior que 0")
    .refine((val) => Number.isFinite(val), { message: "Preço inválido." }),
  validade: z.coerce.date().refine(
    (date) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      return date >= today;
    },
    {
      message: "A data de validade não pode ser anterior a hoje.",
    }
  ),
});

export type OfferData = z.infer<typeof OfferSchema>;
