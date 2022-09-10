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
};

export type Featured = {
  id: string;
  name: string;
  short_description: string;
  restaurants: Restaurant[];
};
export type Restaurant = {
  id: string;
  name: string;
  short_description: string;
  image: string;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: Category;
  dishes: Dish[];
};
