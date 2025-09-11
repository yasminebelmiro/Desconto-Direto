import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import merchantReducer from "./formSlice.ts"

export const store = configureStore({
  reducer: {
    merchant: merchantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
