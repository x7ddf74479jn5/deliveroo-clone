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
