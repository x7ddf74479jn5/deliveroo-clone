import { Nullable } from "./types";

export type Category = {
  id: string;
  name: string;
  short_description: string;
  image: string;
};

export type Dish = {
  id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
};

export type Featured = {
  id: string;
  name: string;
  short_description: string;
  restaurants: Restaurant[];
};
export type Restaurant = {
  id: string;
  title: string;
  short_description: string;
  imgUrl: string;
  lat: number;
  long: number;
  address: string;
  rating: number;
  genre: string;
  dishes: Dish[];
};

export const isRestaurantExists = (restaurant: Nullable<Restaurant>): restaurant is NonNullable<Restaurant> => {
  return Object.values(restaurant).every((v) => v !== null);
};
