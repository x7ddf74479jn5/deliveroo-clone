import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { Category, Featured, Restaurant } from "../models";
import { client } from "../sanity";
import { RestaurantCard } from "./RestaurantCard";
type FeaturedRowProps = {
  id: string;
  title: string;
  description: string;
};

export const FeaturedRow: React.FC<FeaturedRowProps> = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    client
      .fetch(
        `
      *[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type-> {
            name
          }
        }
      }[0]    
    `,
        { id }
      )
      .then((data: Featured) => {
        setRestaurants(data.restaurants);
      });
  }, [id]);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            id={restaurant.id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};
