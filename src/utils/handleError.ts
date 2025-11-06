import { useCallback } from "react";
import { toast } from "react-toastify";

export const onError = (errors: any) => {
  Object.values(errors).forEach((err: any) => {
    if (err?.message) {
      toast.error(err.message);
    }
  });
};
