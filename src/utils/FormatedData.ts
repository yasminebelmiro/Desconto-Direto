export const formatedData = (date: string) => {
  const data = new Date(date);
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
