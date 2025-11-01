export const formatedHour = (time: string) => {
  if (!time) return "N/A";
  const [hour, minute] = time.split(":");
  return `${hour}:${minute}`;
};
