import { configureStore } from "@reduxjs/toolkit";
import merchantReducer from "./commerceSlice.ts";
const store = configureStore({
  reducer: {
    merchant: merchantReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "merchantDraft",
    JSON.stringify(store.getState().merchant)
  );
});
