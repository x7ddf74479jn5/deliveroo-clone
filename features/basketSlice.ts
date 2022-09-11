import { createSlice } from "@reduxjs/toolkit";
import { Dish } from "../models";
import { RootState } from "../store";

type Basket = {
  items: Dish[];
};

const initialState: Basket = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: { payload: Dish }) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      let newBasket = [...state.items];

      if (index > 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove produce (id: ${action.payload.id}) as its not in basket! `);
      }
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketItemsWithId = (state: RootState, id: string) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);
export const basketReducer = basketSlice.reducer;
