import { createSlice } from "@reduxjs/toolkit";
import { accountSchema, basicSchema, detailsSchema } from "../schemas/MerchantRegisterSchema.ts";

const initialState = {
  basic: basicSchema,
  details: detailsSchema,
  account: accountSchema,
};

const merchantSlice = createSlice({
  name: "merchant",
  initialState,
  reducers: {
    saveStep: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetMerchant: () => initialState,
  },
});

export const { saveStep, resetMerchant } = merchantSlice.actions;

export default merchantSlice.reducer;
