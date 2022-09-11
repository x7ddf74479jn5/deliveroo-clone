import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../models";
import { RootState } from "../store";
import { Nullable } from "../types";

type RestaurantState = {
  restaurant: Nullable<Restaurant>;
};

const initialState: RestaurantState = {
  restaurant: {
    id: null,
    title: null,
    short_description: null,
    imgUrl: null,
    lat: null,
    long: null,
    address: null,
    rating: null,
    genre: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: { payload: Restaurant }) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state: RootState) => state.restaurant.restaurant;

export const restaurantReducer = restaurantSlice.reducer;
