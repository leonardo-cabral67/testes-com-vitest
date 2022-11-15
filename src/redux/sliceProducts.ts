import { createSlice } from "@reduxjs/toolkit";

interface Product {
  name: string;
  price: number;
}

const INITIAL_STATE = [
  {
    name: "Régua",
    price: 3,
  },
  {
    name: "Caderno",
    price: 4,
  },
];

const sliceProducts = createSlice({
  name: "Products",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default sliceProducts.reducer;

export const useProducts = (state: any) => {
  return state.Products as Product[];
};
